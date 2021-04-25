document.getElementById("question").innerHTML = "Click 'next question' for your questions to start appering";
let functionRun = 0;
let questionNum = Math.floor(Math.random() * data[0].questionAndPoints.length);
let rand = Math.floor(Math.random() * data.length);
let randQuestionAndPoints = data[rand].questionAndPoints;
let question = randQuestionAndPoints[questionNum].question;
let answer = randQuestionAndPoints[questionNum].answer;
let inputElement = document.getElementById("showAndHide");
inputElement.style.display =  "none";
let points = 0;
function nextQuestion () {
    inputElement.style.display = "block";
    if(functionRun > 0){
        if (answer == document.getElementById("input").value) {
            document.getElementById("result").innerHTML = " You got the last question correct!";
                console.log(functionRun);
                points++;
                if(data[rand].points < 3){
                    data[rand].points++;
                }
                console.log(data[rand].points + " On..." + rand);
                document.getElementById("points").innerHTML = `<b> You have ${points} point(s)!</b>`;
        }else{
            document.getElementById("result").innerHTML = " You got the last question incorrect. Sorry, the answer is:" + answer;
            if(data[rand].points > 0){
                points--;
                data[rand].points --;
                console.log(data[rand].points);
            }
        }
    }
    questionNum = Math.floor(Math.random() * data[0].questionAndPoints.length);
    rand = Math.floor(Math.random() * data.length);
    randQuestionAndPoints = data[rand].questionAndPoints;
    question = randQuestionAndPoints[questionNum].question;
    answer = randQuestionAndPoints[questionNum].answer;
    //console.log(rand + " " + answer);
    //console.log(questionNum);
    document.getElementById("question").innerHTML = `${question}<br/><br/> Answer is: ${answer}`;
    functionRun++;
    
}

