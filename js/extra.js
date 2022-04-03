function displayModal (clicked_id) {
    let title = document.getElementById(clicked_id).innerHTML
    title = title.split(" ")
    $(document).ready(function(){
        $("#questionModal").modal('show');
    });
    alert(clicked_id);
    $("#questionModalLabel").html(title[5])
}
function hideModal() {
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