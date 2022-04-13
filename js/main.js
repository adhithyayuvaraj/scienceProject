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
        

    if(questionNumber >= 0){
        console.log(questionNumber)
        input = document.getElementById("input").value
        answer = data[arrayNumber].questionAndPoints[questionNumber].answer
        if(questionNumber == 1){
            console.log("hi")
            if(answer == input.toLowerCase() || answer == input){
                questionNumber--
            $("#quickMessage").html(
                `<div class="alert alert-success" role="alert">
                    Great job! You got the last question correct!
                </div>`
            )
            pop()
            input == ""
            question = data[arrayNumber].questionAndPoints[questionNumber].question
            questionNumber--
            $("#questionBody").html(question)
            questionsAnswered++
            answer = document.getElementById("input").value
            console.log(answer)
            questionsAnsweredTempObj[`question ${objectNumber}`] = question
            questionsAnsweredTempObj[`answer ${objectNumber}`] = answer
            questionsAnsweredTempObj[`correct ${objectNumber}`] = true
            $("#input").val("")
            objectNumber++
            console.log(questionNumber)
            }else if(input == ""){
                $("#quickMessage").html(`
                <div class="alert alert-warning" role="alert">
                    Please answer the question to proceed. 
                </div>
              
                `)
                $("#questionBody").html(question)
            }else{
                console.log(questionNumber)
                input == ""
                question = data[arrayNumber].questionAndPoints[questionNumber].question
                answer = data[arrayNumber].questionAndPoints[questionNumber].answer
                $("#quickMessage").html(`
                <div class="alert alert-danger" role="alert">
                You got the last question incorrect. The answer was ${answer}.
                <br/> Their is always next time!
                </div>
                `)
                $("#questionBody").html(question)
                questionsAnsweredTempObj[`question ${objectNumber}`] = question
                questionsAnsweredTempObj[`answer ${objectNumber}`] = document.getElementById("input").value
                questionsAnsweredTempObj[`correct ${objectNumber}`] = false
                objectNumber++
                questionNumber--
                question = data[arrayNumber].questionAndPoints[questionNumber].question
                $("#questionBody").text(question)
                $("#input").val("")
                console.log(questionNumber)
                
            }
        }else if(answer == input){
            console.log(questionNumber)
            questionNumber--
            $("#quickMessage").html(
                `<div class="alert alert-success" role="alert">
                    Amazing! You got the last question correct
                </div>`
            )
            pop()
            input == ""
            question = data[arrayNumber].questionAndPoints[questionNumber].question
            $("#questionBody").html(question)
            questionsAnswered++
            answer = document.getElementById("input").value
            console.log(answer)
            questionsAnsweredTempObj[`question ${objectNumber}`] = question
            questionsAnsweredTempObj[`answer ${objectNumber}`] = answer
            questionsAnsweredTempObj[`correct ${objectNumber}`] = true
            $("#input").val("")
            objectNumber++
            console.log(questionNumber)
        
        }else if(input == ""){
            $("#quickMessage").html(`
            <div class="alert alert-warning" role="alert">
                Please answer the question to proceed. 
            </div>
          
            `)
            $("#questionBody").html(question)
        }else{
            console.log(questionNumber)
            input == ""
            question = data[arrayNumber].questionAndPoints[questionNumber].question
            answer = data[arrayNumber].questionAndPoints[questionNumber].answer
            $("#quickMessage").html(`
            <div class="alert alert-danger" role="alert">
            You got the last question incorrect. The answer was ${answer}.
            <br/> Their is always next time!
            </div>
            `)
            $("#questionBody").html(question)
            questionsAnsweredTempObj[`question ${objectNumber}`] = question
            questionsAnsweredTempObj[`answer ${objectNumber}`] = document.getElementById("input").value
            questionsAnsweredTempObj[`correct ${objectNumber}`] = false
            objectNumber++
            question = data[arrayNumber].questionAndPoints[questionNumber].question
            $("#questionBody").text(question)
            $("#input").val("")
            console.log(questionNumber)
            questionNumber--
            
        }
        question = question
    }else{
        console.log(questionNumber)
        document.getElementById("questionBody").innerHTML = `You have answered ${questionsAnswered}/8 questions correctly!!`
        question = ""
        $("#quickMessage").hide()
        $("#quickMessage").text("")
        $("#questionInputBody").hide()
        questionsAnsweredTempObj[`score`] = `${questionsAnswered}`
        questionsAnsweredArray.push(questionsAnsweredTempObj)
        console.log(questionsAnsweredArray)
        makeData()
        questionsAnsweredTempObj = {}
        objectNumber = 1;
        $("#quickNote").hide()
        questionsAnswered = 0
    }
}

function makeData() {
    $("#arrayText").append(`
    <li class="list-group-item">For ${questionsAnsweredTempObj.name}, 
    your score was ${questionsAnsweredTempObj.score}/8</li>
    `)

}

function congrats() {
    $("#questionBody").text("Congradulations, you answered all the questions!")
}




