function displayModal (clicked_id) {
    //making title of modal
    let title = document.getElementById(clicked_id).innerHTML
    title = title.split(" ")

    //setting up the arrayNumber it should call in data.js using the id.
    arrayNumber = clicked_id.slice(2);
    arrayNumber = parseInt(arrayNumber)
    arrayNumber--

    //questionNumber
    questionNumber = 7

    //question and answer varibles
    question = data[arrayNumber].questionAndPoints[questionNumber].question

    //making the modal show up
    $(document).ready(function(){
        $("#questionModal").modal('show');
    });
    //inital text
    $("#questionModalLabel").html(title[5])
    $("#questionModalBody").html(question)
}

function evaluateAnswer(){
     //other variables
     input = document.getElementById("input").value
     answer = data[arrayNumber].questionAndPoints[questionNumber].answer
     question = question
    
     if(answer == input){
        console.log("yay!!!")
        questionNumber--
            if(questionNumber == 6){
                validateAnswer(6)
            }if(questionNumber == 5){
                validateAnswer(5)
                
            }if(questionNumber == 4){
                validateAnswer(4)
                
            }if(questionNumber == 3){
                validateAnswer(3)
                
            }if(questionNumber == 2){
                validateAnswer(2)
            }if(questionNumber == 1){
                validateAnswer(1)
            }if(questionNumber == 0){
                validateAnswer(0)
                $("#modalBody").text("You answered all the questions correctly! Congratulations!!!!")
                $("#questionModal").modal('hide')
                questionNumber == 7
            }
     }else if(input == ""){
         console.log("Hey idiot, u forgot to write something!")
         $("#questionModalBody").html(question)
     }else{
         console.log("wrong!!!")
         $("#questionModalBody").html(question)
     }
     question = question
}

function validateAnswer(questionNumber) {
    if(answer == input){
        input == ""
        console.log(questionNumber)
        question = data[arrayNumber].questionAndPoints[questionNumber].question
        console.log(questionNumber)
        questionNumber--
        $("#questionModalBody").html(question)
    }else if(input == ""){
        input == ""
        console.log("Hey idiot, u forgot to write something!")
        $("#questionModalBody").html(question)
    }else{
        input == ""
        console.log("wrong!!!")
        $("#questionModalBody").html(question)
    }
}
function nextQuestion2() {
    let questionNumber = 7
    let val = $("#findElement").val()
    if($("#answer").value = data[val-1].questionAndPoints[7].answer){
        console.log("yay!")
    }else{
       
    }
}
//  $(document).ready(function(){
//     $("#myModal").modal('show');
// });