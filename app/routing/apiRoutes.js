//used to display a JSON of possible friends & used to handle the compatibility logic.*

//4. Your `apiRoutes.js`file should contain two routes:A GET route with the url `/api/friends`.This will be used to display a JSON of all possible friends.*A POST routes `/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.*
// let friends = require("/api/friends");
// Basic route that sends the user first to the AJAX Page
var friends = require('../data/friends');

module.exports = function(app) {
    app.get("/api/friends", function(req, response) {
        response.json(friends);
    });
    console.log(friends);
    // Displays all characters
    app.post("/api/friends", function(req, res) {
        var newRider = req.body;
        console.log(newRider);
        let bestScore = 51;
        let bestFriend = {};

        // Convert each user 's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`). *
        function compareRiders(friends) {
            for (let j = 0; j < friends.length; j++) {
                let friend = friends[j];
                let compareAnswers = function() {
                    let diffArray = [];
                    for (let q = 0; q < friends.scores[q]; q++) {
                        let rAnswers = friends.scores[q];
                        let newRAnswers = newRider.scores[q];
                        (rAnswers, newRAnswers);
                        let racerQuestionDifference = rAnswers - newRAnswers;
                        //subtract the differences between the answers.
                        //push that absolute number to the diffArray.
                        Math.abs(racerQuestionDifference).push(diffArray);
                    }
                    //then we consolodate the total differences.
                    difArray.reduce((a, b) => a + b, 0);
                    console.log(diffArray)
                    let comparisonScore = compareAnswers().val();
                    if (comparisonScore < bestScore) {
                        friend[j].name.push(bestFriend)
                        friend[j].scores.push(bestScore)
                    }
                }


                //     .then(function() {
                //         console.log("Your riding mojo score most closely resembles " + bestFriend + "'s.")
                //     })

                //     // allRidersArray.push(newRider);
                //     ;

                //     newRider.push(allRidersArray)


                //     $("#matchName")
                //     $("#results")
            }
        }
        compareRiders()
    });
};