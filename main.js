let rand = Math.floor(Math.random() * data.length);
console.log(rand);
let question = 0;
function clear () {
    rand = Math.floor(Math.random() * data.length);
    return;
}
document.getElementById("question").innerHTML = data[rand].qAndP[question].question;
function nextQuestion () {
    let text = data[rand].qAndP;
    if(question <= text.length){
        rand = Math.floor(Math.random() * data.length);
    }
    document.getElementById("question").innerHTML = text[question].question;
    question++;
}
