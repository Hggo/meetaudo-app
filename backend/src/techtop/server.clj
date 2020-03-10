(ns techtop.server
  (:use [compojure.core])
  (:require [compojure.route :as route]
            [cheshire.core :as json]
            [clojure.data.json :as json2])
  (:import org.bson.types.ObjectId))

(def to-json json/generate-string)

(defn readFile [path]
  (with-open [rdr (clojure.java.io/reader path)]
    (clojure.string/join "" (reduce conj [] (line-seq rdr)))))

(defn writeFile [path, data]
  (with-open [wrtr (clojure.java.io/writer path)]
    (.write wrtr (json2/write-str data))))

(defn getData []
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (to-json (readFile "resources/data.json"))})

(defn getSensors []
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (to-json (readFile "resources/sensors.json"))})

(defn getUserData []
  {:status 200
    :headers {"Content-Type" "application/json"}
    :body (to-json (readFile "resources/user.json"))})

(defn updateUserData [userData]
  (writeFile "resources/user.json" userData)
  {:status 200
    :headers {"Content-Type" "application/json"}
    :body (to-json {:message "user was updated"})})

(defroutes all-routes
  (POST "/user" {body :body} (updateUserData body))
  (GET "/user" [] (getUserData))
  (GET "/sensors/list" [] (getSensors))
  (GET "/dashboard/data" [] (getData)))