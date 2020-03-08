// 5. You should save your application 's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

// 6. Determine the user 's most compatible friend using the following as a guide:

const surveyContainer = document.getElementById('survey');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', collectAnswers());

let allRidersArray = [];

// Convert each user 's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`). *
function collectAnswers() {
    riderName = $("#name").text().trim();
    riderAnswer = $("#points").val();
    questionsArray = [];
    diffArray = [];

    for (let i = 0; i < questions.length; i++) {
        riderAnswer.push(questionsArray)
    };
    createNewRider();

    function createNewRider() {
        let newRider = {
            riderName: riderName,
            riderAnswers: questionsArray
        }

        function compareRiders() {
            for (let j = 0; j < allRidersArray.length; j++) {
                rider = allRidersArray[j];

                console.log(rider.riderAnswers);
                console.log(newRider.riderAnswers);
                let compareAnswers = function() {
                    for (let q = 0; q < rider.riderAnswers[q]; q++) {
                        let rAnswers = rider.riderAnswers[q];
                        let newRAnswers = newRider.riderAnswers[q]
                        return (rAnswers, newRAnswers);
                    }
                    let racerQuestionDifference = rAnswers - newRAnswers;
                    let difArray = [];
                    Math.abs(racerQuestionDifference).push(diffArray);
                    difArray.reduce((a, b) => a + b, 0);
                    console.log(difArray)
                }
                compareAnswers().val();
                let differences = [51];
                if (compareAnswers().val() < differences[0]) {
                    differences[0].splice(0, compareAnswers().val())
                    console.log(rider[j])
                };
                //identify and pluck out the matching rider...and then display it. 
            }

        }
        compareRiders();
        newRider.push(allRidersArray)
    };


}

//     With that done, compare the difference between current user 's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`. *
//     Example:
//     *
//     User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]` *
//     User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]` *
//     Total Difference: ** 2 + 1 + 2 = ** ** _5_ **
//     *
//     Remember to use the absolute value of the differences.Put another way: no negative solutions!Your app should calculate both `5-3`
// and `3-5`
// as `2`, and so on.*The closest match will be the user with the least amount of difference.