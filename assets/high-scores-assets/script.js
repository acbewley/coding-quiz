var scoreList = document.querySelector("#scores")
var highScores = []

function renderScores() {
    scoreList.innerHTML = "";

    for (i = 0; i < highScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = highScores[i].name + ": " + highScores[i].time;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    };
};

var compare = function (a, b) {
    return parseInt(a.time) - parseInt(b.time)
}

function sortScores() {
    highScores.sort(compare)
    highScores.reverse()
    renderScores()
}

function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        highScores = storedScores;
    };

    console.log(storedScores)

    sortScores();
};

init()