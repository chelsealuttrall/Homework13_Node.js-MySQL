//used to display a JSON of possible friends & used to handle the compatibility logic.*

//4. Your `apiRoutes.js`file should contain two routes:A GET route with the url `/api/friends`.This will be used to display a JSON of all possible friends.*A POST routes `/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.*

// Basic route that sends the user first to the AJAX Page
app.get("/api/friends", function(req, res) {
    return res.json(allFriends);
});

// Displays all characters
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    allFriends.push(newFriend);
    res.json(newFriend);
});