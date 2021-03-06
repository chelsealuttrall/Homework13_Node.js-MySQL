//2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

//Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 4000;


// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);


// Jumpstarts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});