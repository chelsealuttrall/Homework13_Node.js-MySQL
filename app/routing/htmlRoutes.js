// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.

app.get("/survey", function(req, res) {
    res.send(path.join(__dirname, "survey.html"));
})

app.get("/", function(req, res) {
    res.send(path.join(__dirname, "home.html"));
})

// fs.readFile(__dirname + "/home.html", function(err, data) {
//     if (err) throw err;
//     res.send(200, { "Content-Type": "text/html" });
//     res.end(data);
// });