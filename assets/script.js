var startButton = document.querySelector("#start-button");
var introCard = document.querySelector("#intro")
var questionCard = document.querySelector("#question");
var answer1 = document.querySelector("#answer-1");
var answer2 = document.querySelector("#answer-2");
var answer3 = document.querySelector("#answer-3");
var answer4 = document.querySelector("#answer-4");
var timer = document.querySelector("#timer")
var questions = [
    {
        question: "What coding language is used to create the basic appearance of a webpage?",
        answers: {
            a: "CSS",
            b: "HTML",
            c: "Javascript",
            d: "Python"
        },
        correct: "b",
    },
    {
        question: "What coding laguage is used to change and sylize the look of an HTML page?",
        answers: {
            a: "CSS",
            b: "HTML",
            c: "Javascript",
            d: "Python"
        },
        correct: "a",
    },
    {
        question: "What coding language is used to create the behind the scenes functions of a webpage, such as button clicks and animation?",
        answers: {
            a: "CSS",
            b: "HTML",
            c: "Javascript",
            d: "Python"
        },
    }
];

startButton.addEventListener("click", function() {
    introCard.setAttribute("class", "d-none");
    questionCard.setAttribute("class", "card");
});

