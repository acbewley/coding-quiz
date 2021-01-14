var startButton = document.querySelector("#start-button");
var introCard = document.querySelector("#intro")
var questionCard = document.querySelector("#question");
var questionText = document.querySelector("#question-text")
var answers = document.querySelectorAll("#answers")
var answer1 = document.querySelector("#answer-1");
var answer2 = document.querySelector("#answer-2");
var answer3 = document.querySelector("#answer-3");
var answer4 = document.querySelector("#answer-4");
var timer = document.querySelector("#timer");
var time = 60;
var rightWrong = document.querySelector("#right-wrong");
var newScore
var currentQuestion = 0;
var scoreList = document.querySelector("scores")
var name
var highScores = []
var questions = [
    {
        question: "What coding language is used to construct the basic look of a webpage?",
        answer: {
            a: "JavaScript",
            b: "HTML",
            c: "CSS",
            d: "Python"
        },
        correct: "HTML"
    },
    {
        question: "What coding language is used to style the look of a page, such as font color and element placement?",
        answer: {
            a: "JavaScript",
            b: "HTML",
            c: "CSS",
            d: "Python"
        },
        correct: "CSS"
    },
    {
        question: "What coding language is used to create and manage the behind the scenes functions of a webpage?",
        answer: {
            a: "JavaScript",
            b: "HTML",
            c: "CSS",
            d: "Python"
        },
        correct: "JavaScript"
    },
    {
        question: "Which of these headers whould appear to be the biggest in unaltered HTML?",
        answer: {
            a: "<h4>",
            b: "<h3>",
            c: "<h2>",
            d: "<h1>"
        },
        correct: "<h1>"
    },
    {
        question: "What Bootstrap element is this question and its answers rendered inside of?",
        answer: {
            a: "Jumbotron",
            b: "Navbar",
            c: "Card",
            d: "Carousel"
        },
        correct: "Card"
    },
    {
        question: "What year was JavaScript created?",
        answer: {
            a: "1995",
            b: "2000",
            c: "1990",
            d: "1998"
        },
        correct: "1995"
    },
    {
        question: "What was JavaScript called at first?",
        answer: {
            a: "Latte",
            b: "EspressoScript",
            c: "LiveScript",
            d: "Mocha"
        },
        correct: "Mocha"
    },
    {
        question: "What year was Google Chrome initally launched?",
        answer: {
            a: "2010",
            b: "2008",
            c: "2006",
            d: "2005"
        },
        correct: "2008"
    },
    {
        question: "What HTML tag would you use to make a numbered list?",
        answer: {
            a: "<ul>",
            b: "<list>",
            c: "<li>",
            d: "<ol>",
        },
        correct: "<ol>"
    },
    {
        question: "What grade will I recieve on this assignment?",
        answer: {
            a: "A",
            b: "A",
            c: "A",
            d: "A"
        },
        correct: "A"
    }
];

function initScores() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        highScores = storedScores;
    };
}

function storeScores() {
    localStorage.setItem("scores", JSON.stringify(highScores))
}

function getQuestions() {
    questionText.textContent = questions[currentQuestion].question;
    answer1.textContent = questions[currentQuestion].answer.a;
    answer2.textContent = questions[currentQuestion].answer.b;
    answer3.textContent = questions[currentQuestion].answer.c;
    answer4.textContent = questions[currentQuestion].answer.d;
};

startButton.addEventListener("click", function () {
    introCard.setAttribute("class", "d-none");
    questionCard.setAttribute("class", "card");
    getQuestions();
    startQuiz()
    initScores()
});

function startQuiz() {
    function setScore() {
        highScores.push(newScore)
        storeScores()
    }

    function endQuiz() {
        name = prompt("Your final score is: " + time + ". Enter your name below.")
        clearInterval(setTimer)
        timer.textContent = ""
        newScore = { name: name, time: time }
        setScore()
        window.location.replace("./assets/high-scores.html")
    };

    var setTimer = setInterval(runTimer, 1000);

    function runTimer() {
        time -= 1
        timer.textContent = "Time: " + time
        if (time < -1) {
            alert("You ran out of time!")
            clearInterval(setTimer)
            timer.textContent = ""
            window.location.replace("./assets/high-scores.html")
        }
    };

    answer1.addEventListener("click", function () {
        if (answer1.textContent === questions[currentQuestion].correct) {
            rightWrong.textContent = "Correct!";
            time = time + 5;
        } else if (answer1.textContent != questions[currentQuestion].correct) {
            rightWrong.textContent = "Wrong!";
            time = time - 5;
        };
        if (currentQuestion < (questions.length - 1)) {
            currentQuestion++;
            getQuestions();
        } else {
            endQuiz();
        };

    })

    answer2.addEventListener("click", function () {
        if (answer2.textContent === questions[currentQuestion].correct) {
            rightWrong.textContent = "Correct!";
            time = time + 5;
        } else if (answer2.textContent != questions[currentQuestion].correct) {
            rightWrong.textContent = "Wrong!";
            time = time - 5;
        };
        if (currentQuestion < (questions.length - 1)) {
            currentQuestion++;
            getQuestions();
        } else {
            endQuiz();
        };
    });

    answer3.addEventListener("click", function () {
        if (answer3.textContent === questions[currentQuestion].correct) {
            rightWrong.textContent = "Correct!";
            time = time + 5;
        } else if (answer3.textContent != questions[currentQuestion].correct) {
            rightWrong.textContent = "Wrong!";
            time = time - 5;
        };
        if (currentQuestion < (questions.length - 1)) {
            currentQuestion++;
            getQuestions();
        } else {
            endQuiz();
        };
    });

    answer4.addEventListener("click", function () {
        if (answer4.textContent === questions[currentQuestion].correct) {
            rightWrong.textContent = "Correct!";
            time = time + 5;
        } else if (answer4.textContent != questions[currentQuestion].correct) {
            rightWrong.textContent = "Wrong!";
            time = time - 5;
        };
        if (currentQuestion < (questions.length - 1)) {
            currentQuestion++;
            getQuestions();
        } else {
            endQuiz();
        };
    });
}


