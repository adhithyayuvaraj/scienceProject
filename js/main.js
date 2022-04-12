//makinglots of VARIBLES. NUM NUM NUM
let questionsAnsweredArray = []
let questionsAnsweredTempObj = {}
let question
let questionNumber
let arrayNumber
let questionsAnswered=0
let objectNumber = 1
console.log(questionsAnsweredArray)

function displayModal (clicked_id) {
    $("#congratMessage").hide()
    //setting up the arrayNumber it should call in data.js using the id.
    arrayNumber = clicked_id.slice(2)
    arrayNumber = parseInt(arrayNumber)
    arrayNumber--

    let title = data[arrayNumber].elementName

    //questionNumber
    questionNumber = 7

    //question and answer varibles
    question = data[arrayNumber].questionAndPoints[questionNumber].question

    //making the modal show up
    $(document).ready(function(){
        $("#questionModal").modal('show')
    })
    //inital text
    $("#quickMessage").show()
    $("#questionInputBody").show()
    questionsAnswered = 0
    document.getElementById("questionModalLabel").innerHTML = title
    document.getElementById("questionBody").innerHTML = question
    questionsAnsweredTempObj["name"] = title;
}

function evaluateAnswer(){
    if(questionNumber == -1){
        document.getElementById("questionBody").innerHTML = `You have answered ${questionsAnswered}/8 questions!!`
        question = ""
        questionsAnswered = 0
        console.log(`Their are now ${questionsAnswered} answered correctly`)
        $("#quickMessage").hide()
        $("#quickMessage").text("")
        $("#questionInputBody").hide()
        questionsAnsweredTempObj[`score`] = `${questionsAnswered}/8`
        questionsAnsweredArray.push(questionsAnsweredTempObj)
        console.log(questionsAnsweredArray)
        makeData()
        questionsAnsweredTempObj = {}
        objectNumber = 1;


    }else{
        input = document.getElementById("input").value
        answer = data[arrayNumber].questionAndPoints[questionNumber].answer

        if(answer == input){
            
            questionNumber--
            $("#quickMessage").text("Good Job! You got the last question correct!")
            validateAnswer(questionNumber)
            questionsAnswered++
            answer = document.getElementById("input").value
            console.log(answer)
            questionsAnsweredTempObj[`question ${objectNumber}`] = question
            questionsAnsweredTempObj[`answer ${objectNumber}`] = answer
            questionsAnsweredTempObj[`correct ${objectNumber}`] = true
            $("#input").val("")
            objectNumber++

        
        }else if(input == ""){
            $("#quickMessage").text("Please answer to proceed.")
            $("#questionBody").html(question)
        }else{
            input == ""
            question = data[arrayNumber].questionAndPoints[questionNumber].question
            answer = data[arrayNumber].questionAndPoints[questionNumber].answer
            $("#quickMessage").text(`You got the last question incorrect! The answer was ${answer}`)
            $("#questionBody").html(question)
            questionsAnsweredTempObj[`question ${objectNumber}`] = question
            questionsAnsweredTempObj[`answer ${objectNumber}`] = document.getElementById("input").value
            questionsAnsweredTempObj[`correct ${objectNumber}`] = false
            objectNumber++
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

function makeData() {
    $("#arrayText").append(`
    <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${questionsAnsweredTempObj.name}</h5>
      <p class="card-text">The score you got was${questionsAnsweredTempObj.score}</p>
    </div>
    </div>
    `)

}

function congrats() {
    $("#questionBody").text("Congradulations, you answered all the questions!")
}




