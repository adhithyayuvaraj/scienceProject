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
     let input = document.getElementById("input").value
     let answer = data[arrayNumber].questionAndPoints[questionNumber].answer
     question = question

     if(answer == input){
         console.log("yay!!!")
         if(questionNumber == 7){
             questionNumber--
             question = data[arrayNumber].questionAndPoints[questionNumber].question
             console.log(questionNumber)
             $("#questionModalBody").html(question)
             if(questionNumber == 6){
                questionNumber--
                console.log(questionNumber)
                question = data[arrayNumber].questionAndPoints[questionNumber].question
                $("#questionModalBody").html(question)
                console.log(questionNumber)
                if(questionNumber == 5){
                    question = data[arrayNumber].questionAndPoints[questionNumber].question
                    $("#questionModalBody").html(question)
                    questionNumber--
                    if(questionNumber == 4){
                        questionNumber--
                        question = data[arrayNumber].questionAndPoints[questionNumber].question
                        $("#questionModalBody").html(question)
                        if(questionNumber == 4){
                            question = data[arrayNumber].questionAndPoints[questionNumber].question
                            $("#questionModalBody").html(question)
                            questionNumber--
                            if(questionNumber == 3){
                                question = data[arrayNumber].questionAndPoints[questionNumber].question
                                $("#questionModalBody").html(question)
                                questionNumber--
                                if(questionNumber == 2){
                                    question = data[arrayNumber].questionAndPoints[questionNumber].question
                                    $("#questionModalBody").html(question)
                                    questionNumber--
                                    if(questionNumber == 1){
                                        question = data[arrayNumber].questionAndPoints[questionNumber].question
                                        $("#questionModalBody").html(question)
                                        questionNumber--
                                        if(questionNumber == 0) {
                                            question = "Congrats! You answered all the questions correctly"
                                         }
                                     }
                                 }
                             }
                         }
                     }
                 }
             }
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
function hideModal() {
    //hiding.... the modal. LOOK AT THE FUNCTION NAME BRUH.
    $(document).ready(function(){
        $("#questionModal").modal('hide');
    });
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