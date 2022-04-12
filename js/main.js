let choices = ["Answering questions","Answering questions"]
let question;
let questionNumber;
let arrayNumber;
let questionsAnswered=0;

function displayModal (clicked_id) {
    $("#congratMessage").hide();
    //setting up the arrayNumber it should call in data.js using the id.
    arrayNumber = clicked_id.slice(2);
    arrayNumber = parseInt(arrayNumber)
    arrayNumber--

    let title = data[arrayNumber].elementName

    //questionNumber
    questionNumber = 7

    //question and answer varibles
    question = data[arrayNumber].questionAndPoints[questionNumber].question

    //making the modal show up
    $(document).ready(function(){
        $("#questionModal").modal('show');
    });
    //inital text
    $("#quickMessage").show()
    $("#questionInputBody").show()
    questionsAnswered = 0;
    document.getElementById("questionModalLabel").innerHTML = title
    document.getElementById("questionBody").innerHTML = question
}

function evaluateAnswer(){
    if(questionNumber == -1){
        document.getElementById("questionBody").innerHTML = `You have answered ${questionsAnswered}/8 questions!!`
        question = ""
        questionsAnswered = 0;
        console.log(`Their are now ${questionsAnswered} answered correctly`)
        $("#quickMessage").hide()
        $("#quickMessage").text("")
        $("#questionInputBody").hide()

    }else{
        input = document.getElementById("input").value
        answer = data[arrayNumber].questionAndPoints[questionNumber].answer

        if(answer == input){
            
            questionNumber--
            $("#quickMessage").text("Good Job! You got the last question correct!")
            validateAnswer(questionNumber)
            questionsAnswered++
            $("#input").val("")
        }else if(input == ""){
            $("#quickMessage").text("Please answer to proceed.")
            $("#questionBody").html(question)
        }else{
            input == ""
            question = data[arrayNumber].questionAndPoints[questionNumber].question
            answer = data[arrayNumber].questionAndPoints[questionNumber].answer
            $("#quickMessage").text(`You got the last question incorrect! The answer was ${answer}`)
            $("#questionBody").html(question)
            questionNumber--
            question = data[arrayNumber].questionAndPoints[questionNumber].question
            $("#questionBody").text(question)
            $("#input").val("")
            
            
        }
        question = question
    }
}

function validateAnswer(questionNumber) {
    
     if(answer == input){
        if(questionNumber >= 0){
            input == ""
            question = data[arrayNumber].questionAndPoints[questionNumber].question
            questionNumber--
            $("#input").val("")
        }
        $("#questionBody").html(question)
    }else if(input == ""){
        input == ""
        $("#questionBody").html(question)
    }else{
        input == ""
        question = data[arrayNumber].questionAndPoints[questionNumber].question
        $("#questionBody").html(question)
        questionNumber--
        $("#input").val("")
    }
}

function congrats() {
    $("#questionBody").text("Congradulations, you answered all the questions!")
}




