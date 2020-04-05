// 3. Your `htmlRoutes.js` file should include two routes:
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//we are going to declare a module exports object that will take the routes we will establish here and make them easily usable in the serverjs file.
module.exports = function(app) {
        app.get("/", function(req, res) {
            res.send(path.join(__dirname, "../public/home.html"));
        })
        app.get("/survey", function(req, res) {
            res.send(path.join(__dirname, "../public/survey.html"));
        })
    }
    //    * A GET Route to `/survey` which should display the survey page.
    //    * A default, catch-all route that leads to `home.html` which displays the home page.