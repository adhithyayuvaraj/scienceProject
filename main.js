//all the logic
document.getElementById("question").innerHTML = "Click 'next question' for your questions to start appearing";
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
        if(isNaN(answer)){
            if (answer.toLowerCase() == document.getElementById("input").value.toLowerCase()) {
                document.getElementById("result").innerHTML = " You got the last question correct!";
                    console.log(functionRun);
                    points++;
                    if(data[rand].points < 3){
                        data[rand].points++;
                    }
                    
                    let idName = "el" + (rand+1);
                    let AidName = idName + "a"
                    console.log(idName)
                    console.log(data[rand].points + " On..." + (rand + 1));
                    let element = document.getElementById(idName);
                    element.style.visibility = "visible";
                    document.getElementById(AidName).style.visibility = "hidden";
                    document.getElementById("points").innerHTML = `<b> You have ${points} point(s)!</b>`;
            }else{
                document.getElementById("result").innerHTML = " You got the last question incorrect. Sorry, the answer is:" + answer;
                let idName = "el" + (rand+1);
                    let AidName = idName + "a"
                    let element = document.getElementById(idName);
                    element.style.visibility = "hidden";
                    document.getElementById(AidName).style.visibility = "visible";
                    console.log(element.style.visibility)
                if(data[rand].points > 0){
                    points--;
                    data[rand].points --;
                    console.log(data[rand].points);
                }
            }
            document.getElementById("input").value = "";
        }else{
            if (answer == document.getElementById("input").value) {
                document.getElementById("result").innerHTML = " You got the last question correct!";
                    console.log(functionRun);
                    points++;
                    if(data[rand].points < 3){
                        data[rand].points++;
                    }
                    let idName = "el" + (rand+1);
                    let AidName = idName + "a"
                    console.log(idName)
                    console.log(data[rand].points + " On..." + (rand + 1));
                    let element = document.getElementById(idName);
                    element.style.visibility = "visible";
                    document.getElementById(AidName).style.visibility = "hidden";
                    document.getElementById("points").innerHTML = `<b> You have ${points} point(s)!</b>`;
            }else{
                document.getElementById("result").innerHTML = " You got the last question incorrect. Sorry, the answer is:" + answer;
                let idName = "el" + (rand+1);
                    let AidName = idName + "a"
                    let element = document.getElementById(idName);
                    element.style.visibility = "hidden";
                    document.getElementById(AidName).style.visibility = "visible";
                    console.log(element.style.visibility)
                if(data[rand].points > 0){
                    points--;
                    data[rand].points --;
                    console.log(data[rand].points);
                }
            }
            document.getElementById("input").value = ""; 
        }
    }
    questionNum = Math.floor(Math.random() * data[0].questionAndPoints.length);
    rand = Math.floor(Math.random() * data.length);
    randQuestionAndPoints = data[rand].questionAndPoints;
    question = randQuestionAndPoints[questionNum].question;
    answer = randQuestionAndPoints[questionNum].answer;
    //console.log(rand + " " + answer);
    //console.log(questionNum);
    document.getElementById("question").innerHTML = `${question}`;
    functionRun++;
    
}

function showRules () {
    document.getElementById("rules").style.display = "block"
    document.getElementById("showRules").style.display = "none"
    document.getElementById("showRules").style.display = "block"
}
function hideRules () {
    document.getElementById("rules").style.display = "none"
    document.getElementById("hideRules").style.display = "block"
    document.getElementById("hideRules").style.display = "block"
}
