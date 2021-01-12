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
    console.log(questions.length)
});

answer1.addEventListener("click", function () {
    if (answer1.textContent === questions[currentQuestion].correct) {
        rightWrong.textContent = "Correct!";
    } else if (answer1.textContent != questions[currentQuestion].correct) {
        rightWrong.textContent = "Wrong!";
    }
    if (currentQuestion < (questions.length - 1)) {
        currentQuestion++;
        getQuestions();
    } else {
        console.log("done")
    }

})

answer2.addEventListener("click", function () {
    if (answer2.textContent === questions[currentQuestion].correct) {
        rightWrong.textContent = "Correct!";
    } else if (answer2.textContent != questions[currentQuestion].correct) {
        rightWrong.textContent = "Wrong!";
    }
    if (currentQuestion < (questions.length - 1)) {
        currentQuestion++;
        getQuestions();
    } else {
        console.log("done")
    }
})

answer3.addEventListener("click", function () {
    if (answer3.textContent === questions[currentQuestion].correct) {
        rightWrong.textContent = "Correct!";
    } else if (answer3.textContent != questions[currentQuestion].correct) {
        rightWrong.textContent = "Wrong!";
    }
    if (currentQuestion < (questions.length - 1)) {
        currentQuestion++;
        getQuestions();
    } else {
        console.log("done")
    }
})

answer4.addEventListener("click", function () {
    if (answer4.textContent === questions[currentQuestion].correct) {
        rightWrong.textContent = "Correct!";
    } else if (answer4.textContent != questions[currentQuestion].correct) {
        rightWrong.textContent = "Wrong!";
    }
    if (currentQuestion < (questions.length - 1)) {
        currentQuestion++;
        getQuestions();
    } else {
        console.log("done")
    }
})
