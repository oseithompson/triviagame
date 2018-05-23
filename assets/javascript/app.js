//Questions

function Question(text, choices, answer) {
    this.text=text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

//Scores and number of questions

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}
// Functions to populate the questions
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show choices
    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i < choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}

    

var questions = [
    new Question ("What does AJAX stand for?", ["The Bleach", "Application Java Association and XML", "Asynchronous JavaScript and XML", "All of the Above"], "Asynchronous JavaScript and XML"),    
    
    new Question ("What two parameters do we pass into AJAX to retrieve data from online?", ["console and log", "ajax and URL", "URL and GET", "API and Data"], "URL and GET"),

    new Question ("What does (ul) stand for?", ["An unordered list", "A list Item", "Both", "None"], "An unordered list"),
    
    new Question ("What does (strong) stand for?", ["A Body Builder", "Bold Text", "Superman", "You are Strong"], "Bold Text"),
    
    new Question ("Which one of these is an Id tag", [".row", "body", "#logo", "$get"], "#logo")
];
var quiz = new Quiz(questions);

populate();

//Timer
var timeleft = 30;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);