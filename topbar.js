// making a working top bar
let ruleBtn = $("#ruleBtn");
let quizBtn = $("#quizBtn");
let progressBtn = $("#progressBtn");
let rule = $("#rules");
let quiz = $("#quiz");
let progress = $("#progress");
quiz.hide()
progress.hide()
function showRules () {
    rule.show()
    quiz.hide()
    progress.hide()
}
function showQuiz () {
    quiz.show()
    progress.hide()
    rule.hide()
}
function showProgress () {
    progress.show()
    quiz.hide()
    rule.hide()
}
ruleBtn.on("click",function(){showRules()})
quizBtn.on("click",function(){showQuiz()})
progressBtn.on("click",function(){showProgress()})