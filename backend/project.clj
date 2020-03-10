(defproject techtop "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [http-kit "2.0.1"]
                 [compojure "1.1.5" :exclusions [ring/ring-core ring/util/response]]
                 [cheshire "5.1.1"]
                 [com.novemberain/monger "1.5.0"]
                 [org.clojure/data.json "0.2.6"]
                 [ring "1.8.0"]
                 [ring/ring-json "0.5.0" :exclusions [ring/ring-core ring/util/response]]
                ]
  
  :main ^:skip-aot techtop.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
