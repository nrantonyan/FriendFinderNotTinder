//Npm packages
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//Express and PORT
var app = express();

var PORT = process.env.PORT || 3000;

//Parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });