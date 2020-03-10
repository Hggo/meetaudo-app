(ns techtop.core
  (:require
   [techtop.server :as server]
   [compojure.handler :as handler]
   [ring.middleware.json :as js])
  (:use org.httpkit.server)
  (:gen-class))

(require '[ring.middleware.json :refer [wrap-json-body]]
         '[ring.util.response :refer [response]])

(defn -main [& args]
    (run-server (wrap-json-body (handler/site #'server/all-routes)) 
      {:host "0.0.0.0" :port 8080})
    (println "I'm running at localhost:8080, cry"))