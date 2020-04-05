//used to display a JSON of possible friends & used to handle the compatibility logic.*

//4. Your `apiRoutes.js`file should contain two routes:A GET route with the url `/api/friends`.This will be used to display a JSON of all possible friends.*A POST routes `/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.*
let friends = require("../data/friends");
// Basic route that sends the user first to the AJAX Page
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    // Displays all characters
    app.post("/api/friends", function(req, res) {
        var newRider = req.body;
        console.log(newRider);

        // allRidersArray.push(newRider);
        let bestScore = 40;
        let bestFriend = {}

        // loop thorugh all friends
        // set currentScore = 0
        // loop through all questions
        // if (question for new Rider != question for current friend)
        // currentScore += Math.Abs(rider answer - friend answer)
        // if currentScore < bestScore
        // bestScore == currentScore
        // bestFriend = friend

        friends.push(newRider)

        res.json(bestFriend);

        res.end();
    });
}


//-----------------
for (var i = 0; i < newFriend.scores.length; i++) {
    if (newFriend.scores[i] === "1 (Strongly Disagree)") {
        newFriend.scores[i] = 1;
    } else if (newFriend.scores[i] === "5 (Strongly Agree)") {
        newFriend.scores[i] = 5;
    } else {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }
}

var diff = [];

for (var i = 0; i < friends.length; i++) {
    var compatibleFriend = friends[i];
    var totalDifference = 0;

    for (var j = 0; j < compatibleFriend.scores.length; j++) {
        var tempDiff = Math.abs(compatibleFriend.scores[j] - newFriend.scores[j]);
        totalDifference += tempDiff;
    }
    diff.push(totalDifference);
}

var num = diff[0];
var index = 0;

for (var x = 0; x < diff.length; x++) {
    if (diff[x] < num) {
        num = diff[x];
        index = x;
    }
}

friends.push(newFriend);

response.json(friends[index]);

});

}