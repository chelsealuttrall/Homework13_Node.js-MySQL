// 5. You should save your application 's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.



// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// ===============================================================================


var friends = [{
        name: "Ahmed",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        name: "Jacob Deming",
        scores: [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        name: "Jeremiah Scanlon",
        scores: [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        name: "Louis T. Delia",
        scores: [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        name: "Lou Ritter",
        scores: [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        name: "Jordan Biason",
        scores: [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    }

];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;