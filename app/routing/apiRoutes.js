var userData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(userData);
    });

    var comparisonUserTotalScore = 0;

    var friendScores = [];
    app.post("/api/friends", function (req, res) {

        var currentUserScores = req.body.scores;

        console.log("Current user scores: " + currentUserScores);

        for (var i = 0; i < userData.length; i++) {

            var comparisonUserScores = userData[i].scores;

            comparisonUserTotalScore = calculateUserCompatibilityScore(currentUserScores, comparisonUserScores);

            friendScores.push(comparisonUserTotalScore);

        }

        console.log("Array of friend scores: " + friendScores);

        var index = 0;
        var value = friendScores[0];

        for (var i = 0; i < friendScores.length; i++) {
            console.log("Value of item in array: " + friendScores[i]);
            if (friendScores[i] < value) {
                value = friendScores[i];
                index = i;
            }
        }

        console.log("Matched Friend: " + userData[index].name);

        res.send(userData[index]);

        userData.push(req.body);

    });
};

var totalDifference = 0;

function matchedDifference(currentUserScores, comparisonUserScores) {

  totalDifference = 0;

  for (var i = 0; i < currentUserScores.length; i++) {

    totalDifference+=Math.abs(currentUserScores[i] - comparisonUserScores[i]);
  }

  console.log("Final total difference for friend: " + totalDifference);

  return totalDifference;
}