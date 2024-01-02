//global vars
let startButton = document.querySelector("#start");
startButton.addEventListener("click", init);

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", storeData);

let sendInitials = document.querySelector("#initials");
let scoreFinal = document.querySelector("#final-score");

let startScreen = document.querySelector("#start-screen");
let endScreen = document.querySelector("#end-screen");

let timer = document.querySelector("#time")
let choiceBox = document.querySelector("#choices");
let questionScreen = document.querySelector("#questions");

let correctSound = new Audio("./assets/sfx/correct.wav");
let wrongSound = new Audio("./assets/sfx/incorrect.wav");

let feedbackText = document.getElementById("feedback");

let score = 0;
let countdown = 50;
let intervalID;
let questionNr = 0;
let storedHighscore = [];

// start button to initiate timer + first question appear
function init() {
    //start screen to hide
    startScreen.classList.remove("start");
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    //start time
    startTime();
    timeReamining();
    generateQuestion();
}

// function to start time counting
function startTime() {
    intervalID = setInterval(timeReamining, 1000);
}

// function to count down time
function timeReamining() {
    if(countdown >= 0) {
    timer.textContent = countdown;
    countdown--;
    } else {
        endTime();
    }
}

// function to end game 
function endTime() {
    timer.textContent = 0;
    clearInterval(intervalID);
    questionScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    scoreFinal.textContent = score;
}

// function to show question
function generateQuestion() {

    let question = questionList[questionNr];
    choiceBox.innerHTML = "";

    document.querySelector("#question-title").textContent = question.title;

    for(let i=0; i < question.choices.length; i++){
        let buttonChoice =  document.createElement("button");
        buttonChoice.textContent = question.choices[i];
        choiceBox.appendChild(buttonChoice);
    }
}

// choice button clicks to verify user's choice and show next question
choiceBox.addEventListener("click", function(event) {

    let button = event.target;

    if(countdown === 0){
        return;
    };

    let answer = questionList[questionNr].correctAnswer;
    let correctAnsw = questionList[questionNr].choices[answer];
    
    if(button.textContent == correctAnsw){
        score++;
        questionNr++;
        correctSound.play();
        feedback("Correct!");

    }else { 
        questionNr++;
        countdown -= 5;
        wrongSound.play();
        feedback("Wrong!");
    } 

    if (questionNr < questionList.length) {
        generateQuestion();
    } else {
        endTime();
    }

});

// function to save score and initial of the user
function storeData() {

    let initlias = sendInitials.value.toUpperCase();
    
    if(initlias !== ""){
    
    let storedHighscore = JSON.parse(localStorage.getItem('Highscore')) || [];
    storedHighscore.push(`${initlias} - ${score}`);
    localStorage.setItem('Highscore', JSON.stringify(storedHighscore));
    window.location.href = "highscores.html";

    } else {
        feedback("Please put your initals.");
    }
}

// function to inform user about correct or incorret answer and to put initilas
function feedback(message) {

    feedbackText.textContent = message;
    feedbackText.classList.remove("hide");

    setTimeout(function() {
        feedbackText.classList.add("hide");
    }, 1000);
}
