let choices = ["Answering questions","Answering questions"]
let question;
let questionNumber;
let arrayNumber;
let questionsAnswered=0;

function displayModal (clicked_id) {
    let title = document.getElementById(clicked_id).innerHTML
    title = title.split(" ")
    $("#congratMessage").hide();
    //setting up the arrayNumber it should call in data.js using the id.
    arrayNumber = clicked_id.slice(2);
    arrayNumber = parseInt(arrayNumber)
    arrayNumber--

    //questionNumber
    questionNumber = 2

    //question and answer varibles
    question = data[arrayNumber].questionAndPoints[questionNumber].question

    //making the modal show up
    $(document).ready(function(){
        $("#questionModal").modal('show');
    });
    //inital text
    console.log(`At the beggining of ${title[5]} the ${questionNumber} is when it should be 7`)
    //console.log(arrayNumber)
    //console.log(title[5])
    //console.log(question)
    document.getElementById("questionModalLabel").innerHTML = title[5]
    $("#questionBody").text(question)
}

function evaluateAnswer(){
    if(questionNumber == -1 || choices[arrayNumber] == "Finished answering"){
        document.getElementById("modalBody").innerHTML = `You have answered ${questionsAnswered}/8 questions! Good job!`
        console.log(questionNumber)
        question = ""
        console.log(question)
        console.log("After answering all the questions in Hydrogen is answered, the question number is" + questionNumber)
    }else{
        input = document.getElementById("input").value
        answer = data[arrayNumber].questionAndPoints[questionNumber].answer

        if(answer == input){
            console.log("yay!!!")
            questionNumber--
            questionsAnswered++;
        $("#quickMessage").text("good job")
        if(questionNumber == 7){
            validateAnswer(7)
            questionsAnswered++;
        }if(questionNumber == 6){
            validateAnswer(6)

            questionsAnswered++;
        }if(questionNumber == 5){
            validateAnswer(5)
            questionsAnswered++;
        }if(questionNumber == 4){
            validateAnswer(4)
            questionsAnswered++;
        }if(questionNumber == 3){
            validateAnswer(3)
            questionsAnswered++;
        }if(questionNumber == 2){
            validateAnswer(2)
            questionsAnswered++;
        }if(questionNumber == 1){
            validateAnswer(1)
            questionsAnswered++;
        }if(questionNumber == 0){
            validateAnswer(0)
            questionsAnswered++;
        }
        }else if(input == ""){
            console.log("Hey idiot, u forgot to write something!")
            $("#questionBody").html(question)
        }else{
            input == ""
            console.log(questionNumber)
            question = data[arrayNumber].questionAndPoints[questionNumber].question
            console.log(questionNumber)
            questionNumber--
        }
        question = question
    }
}

function validateAnswer(questionNumber) {
    
     if(answer == input){
        if(questionNumber >= 0){
            input == ""
            console.log(questionNumber)
            question = data[arrayNumber].questionAndPoints[questionNumber].question
            console.log(questionNumber)
            questionNumber--
        }else if(questionNumber == 0){
            console.log("hey")
        }
        $("#questionBody").html(question)
    }else if(input == ""){
        input == ""
        console.log("Hey idiot, u forgot to write something!")
        $("#questionBody").html(question)
    }else{
        input == ""
        console.log(questionNumber)
        question = data[arrayNumber].questionAndPoints[questionNumber].question
        console.log(questionNumber)
        questionNumber--
    }
}
function nextQuestion2() {
    let val = $("#findElement").val()
    if($("#answer").value = data[val-1].questionAndPoints[7].answer){
        console.log("yay!")
    }else{
       
    }
}
function congrats() {
    $("#questionBody").text("Congradulations, you answered all the questions!")
}
//  $(document).ready(function(){
//     $("#myModal").modal('show');
// });

