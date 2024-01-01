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
