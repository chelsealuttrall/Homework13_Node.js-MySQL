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
    let newRider = req.body;
    console.log("newRider.scores", newRider.scores);

    for (let i = 0; i < newRider.scores.length; i++) {
      newRider.scores[i] = parseInt(newRider.scores[i]);
    }

    let diffArray = [50];
    let riderBud = {};
    console.log("diffArray", diffArray, "riderBud", riderBud);
    for (let i = 0; i < friends.length; i++) {
      let compatibleRider = friends[i];
      let totalDiff = 0;

      for (let j = 0; j < compatibleRider.scores.length; j++) {
        let thisDiff = Math.abs(compatibleRider.scores[j] - newRider.scores[j]);
        totalDiff += thisDiff;
        console.log("totalDiff += thisDiff", (totalDiff += thisDiff));
        riderIndex = compatibleRider;
      }
      console.log("diffArray", diffArray, "riderBud", riderBud);
      if (totalDiff < diffArray) {
        diffArray = [totalDiff];
        riderBud = riderIndex;
      }
    }

    friends.push(newRider);
    res.json(riderBud.name);
    console.log("Your riding mojo score most closely resembles ", riderBud.name, "'s.");
    //   console.log(friends);
    //
  });
};
