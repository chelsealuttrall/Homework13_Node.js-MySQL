//used to display a JSON of possible friends & used to handle the compatibility logic.*

//4. Your `apiRoutes.js`file should contain two routes:A GET route with the url `/api/friends`.This will be used to display a JSON of all possible friends.*A POST routes `/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.*
// let friends = require("/api/friends");
// Basic route that sends the user first to the AJAX Page
var friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function (req, res) {
    userData = req.body;
    let newRider = userData;

    console.log("all da friends:", friends);
    // Displays all characters

    console.log("NewRider:", newRider);
    let bestScore = 51;
    let bestFriend = "";

    // Convert each user 's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`). *
    for (let j = 0; j < friends; j++) {
      let friend = friends[j];
      console.log(friend);
      friend = friend[j + 1];
      diffArray = [];
      let diffArray = [];
        for (let q = 0; q < friend.scores.length; q++) {
          let rAnswer = friend.scores[q];
          let newRAnswer = newRider.scores[q];
          rAnswer, newRAnswer;
          let racerQuestionDifference = rAnswers - newRAnswers;
          //subtract the differences between the answers.
          //push that absolute number to the diffArray.
          Math.abs(racerQuestionDifference).push(diffArray);
          q++;
        }
        //then we consolodate the total differences.
        diffArray.reduce((a, b) => a + b, 0);
        console.log(diffArray);
        let comparisonScore = diffArray;
        if (comparisonScore < bestScore) {
          bestFriend = friend[j].name;
          friend[j].push(diffArray.val());
        }
    }

    let data = { bestFriend: bestFriend, bestScore: bestScore };
    friends.push(newRider);
    res.json(data);
    console.log("Your riding mojo score most closely resembles ", data, "'s.");
    console.log(friends);
  });
};
