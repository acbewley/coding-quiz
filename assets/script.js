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
var time = 60
var rightWrong = document.querySelector("#right-wrong")
var currentQuestion = 0
var questions = [
    {
        question: "what the heck",
        answer: {
            a: "yep",
            b: "nope",
            c: "maybe",
            d: "whatever, man"
        },
        correct: "nope"
    },
    {
        question: "how the heck?",
        answer: {
            a: "idk",
            b: "crazy",
            c: "wow",
            d: "hooo"
        },
        correct: "hooo"
    },
    {
        question: "when the heck",
        answer: {
            a: "then",
            b: "now",
            c: "never",
            d: "forever"
        },
        correct: "never"
    }
]

function startTimer() {
    if (time > 0 && currentQuestion < (questions.length - 1)) {
        setInterval(function () {
            timer.textContent = "Time: " + time;
            time -= 1;
        }, 1000)
    } else if (time <= 0 || currentQuestion >= (questions.length)) {
        endQuiz()
    }
}

function endQuiz() {
    alert("Final Score: " + time)
    timer.textContent = ""
    time = 0
}

function getQuestions() {
    questionText.textContent = questions[currentQuestion].question
    answer1.textContent = questions[currentQuestion].answer.a
    answer2.textContent = questions[currentQuestion].answer.b
    answer3.textContent = questions[currentQuestion].answer.c
    answer4.textContent = questions[currentQuestion].answer.d
};

startButton.addEventListener("click", function () {
    introCard.setAttribute("class", "d-none");
    questionCard.setAttribute("class", "card");
    getQuestions();
    startTimer();
});

answer1.addEventListener("click", function () {
    if (answer1.textContent === questions[currentQuestion].correct) {
        rightWrong.textContent = "Correct!";
        time = time + 5
    } else if (answer1.textContent != questions[currentQuestion].correct) {
        rightWrong.textContent = "Wrong!";
        time = time - 5
    }
    if (currentQuestion < (questions.length - 1)) {
        currentQuestion++;
        getQuestions();
    } else {
        endQuiz()
    }

})

answer2.addEventListener("click", function () {
    if (answer2.textContent === questions[currentQuestion].correct) {
        rightWrong.textContent = "Correct!";
        time = time + 5
    } else if (answer2.textContent != questions[currentQuestion].correct) {
        rightWrong.textContent = "Wrong!";
        time = time - 5
    }
    if (currentQuestion < (questions.length - 1)) {
        currentQuestion++;
        getQuestions();
    } else {
        endQuiz()
    }
})

answer3.addEventListener("click", function () {
    if (answer3.textContent === questions[currentQuestion].correct) {
        rightWrong.textContent = "Correct!";
        time = time + 5
    } else if (answer3.textContent != questions[currentQuestion].correct) {
        rightWrong.textContent = "Wrong!";
        time = time - 5
    }
    if (currentQuestion < (questions.length - 1)) {
        currentQuestion++;
        getQuestions();
    } else {
        endQuiz()
    }
})

answer4.addEventListener("click", function () {
    if (answer4.textContent === questions[currentQuestion].correct) {
        rightWrong.textContent = "Correct!";
        time = time + 5
    } else if (answer4.textContent != questions[currentQuestion].correct) {
        rightWrong.textContent = "Wrong!";
        time = time - 5
    }
    if (currentQuestion < (questions.length - 1)) {
        currentQuestion++;
        getQuestions();
    } else {
        endQuiz()
    }
})
