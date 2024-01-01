//global vars
const list = document.querySelector("#highscores");

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", cleanList);

// function to get score from local storage and list it
function getScore() {

    let scoresList = JSON.parse(localStorage.getItem("Highscore"));

    if(scoresList) {

    orderList(scoresList);

    for(let i=0; i < scoresList.length; i++){
        let listedScore =  document.createElement("li");
        listedScore.textContent = scoresList[i];
        list.appendChild(listedScore);
    }
    }else {
        return;
    }
}

getScore();

// function to order score from top to bottom
function orderList(data) {
    data.sort((a, b) => {
        const scoreA = parseInt(a.split(" - ")[1]);
        const scoreB = parseInt(b.split(" - ")[1]);
        return scoreB - scoreA;
    });
}

// function to clear Highscore list
function cleanList() {
    localStorage.clear();
    list.innerHTML=""; 
}
