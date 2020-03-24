//used to display a JSON of possible friends & used to handle the compatibility logic.*

//4. Your `apiRoutes.js`file should contain two routes:A GET route with the url `/api/friends`.This will be used to display a JSON of all possible friends.*A POST routes `/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.*
let friends = require("../data/friends");
// Basic route that sends the user first to the AJAX Page
app.get("/api/friends", function(req, res) {
    return res.json(allRidersArray);
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
});