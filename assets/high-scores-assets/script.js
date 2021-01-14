var scoreList = document.querySelector("#scores")
var highScores = []

// function to create and populate items in the high score list
function renderScores() {
    scoreList.innerHTML = "";

    //for loop that prints the scores for each item in the highScores array
    for (i = 0; i < highScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = highScores[i].name + ": " + highScores[i].time;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    };
};

// compare function to sort the array by score (time)
var compare = function (a, b) {
    return parseInt(a.time) - parseInt(b.time)
}

// function to actually sort the scores, reverse them to the correct order, and runs the function to render them
function sortScores() {
    highScores.sort(compare)
    highScores.reverse()
    renderScores()
}

// function to grab the score list on load, and runs the sortScores function
function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        highScores = storedScores;
    };

    sortScores();
};

// running the init function on load
init()