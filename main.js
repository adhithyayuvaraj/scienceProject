document.getElementById("question").innerHTML = "Click 'next question' for your questions to start appering";
let functionRun;
function nextQuestion () {
    functionRun = 0;
    if(functionRun > 0){
        console.log("g");
        if (answer == document.getElementById("submit")) {
            document.getElementById("result").innerHTML = "Correct";
    
        }else{
            document.getElementById("result").innerHTML = "Incorrect";
        }
    }
    let rand = Math.floor(Math.random() * data.length);
    console.log(rand);
    let questionNum = Math.floor(Math.random() * data[0].questionAndPoints.length);
    console.log(questionNum);
    let randQuestionAndPoints = data[rand].questionAndPoints;
    let question = randQuestionAndPoints[questionNum].question;
    let answer = randQuestionAndPoints[questionNum].answer;
    document.getElementById("question").innerHTML = `${question}<br/><br/> Answer is: ${answer}`;
    functionRun++;
    
}
