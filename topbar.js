// making a working top bar
let ruleBtn = $("#ruleBtn");
let quizBtn = $("#quizBtn");
let progressBtn = $("#progressBtn");
let rule = $("#rules");
let quiz = $("#quiz");
let progress = $("#progress");
quiz.hide()
progress.hide()
ruleBtn.addClass("onTab")
function showRules () {
    rule.show()
    quiz.hide()
    progress.hide()
    ruleBtn.addClass("onTab").removeClass("topBtn")
    quizBtn.removeClass("onTab").addClass("topBtn")
    progressBtn.removeClass("onTab").addClass("topBtn")
}
function showQuiz () {
    quiz.show()
    progress.hide()
    rule.hide()
    quizBtn.addClass("onTab").removeClass("topBtn")
    ruleBtn.removeClass("onTab").addClass("topBtn")
    progressBtn.removeClass("onTab").addClass("topBtn")
}
function showProgress () {
    progress.show()
    quiz.hide()
    rule.hide()
    quizBtn.removeClass("onTab").addClass("topBtn")
    ruleBtn.removeClass("onTab").addClass("topBtn")
    progressBtn.addClass("onTab").removeClass("topBtn")
}
ruleBtn.on("click",function(){showRules()})
quizBtn.on("click",function(){showQuiz()})
progressBtn.on("click",function(){showProgress()})