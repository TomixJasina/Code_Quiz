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
