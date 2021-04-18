let rand = Math.floor(Math.random() * data.length);
console.log(rand);
let questionNum = 0;
document.getElementById("question").innerHTML = "Click 'next question' for your questions to start appering";
function nextQuestion () {
    console.log(questionNum);
    let randQuestionAndPoints = data[rand].questionAndPoints;
    let question = randQuestionAndPoints[questionNum].question
    if(question >= randQuestionAndPoints.length){
        rand = Math.floor(Math.random() * data.length);
    }
    document.getElementById("question").innerHTML = question+ " :: " + randQuestionAndPoints[questionNum].points ;
    questionNum = questionNum + 1;
    console.log(`At the end ${questionNum}`)
}
