//Npm package
var path = require("path");

//Routing
module.exports = function (app) {
    //GET survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
    //Home default
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};