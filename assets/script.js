var startButton = document.querySelector("#answer-1");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer-1");
var answer2 = document.querySelector("#answer-2");
var answer3 = document.querySelector("#answer-3");
var answer4 = document.querySelector("#answer-4");
var ansButtons = document.querySelector("#answer");
var question1 = {
    question: "What coding language is used to create the basic appearance of a webpage?",
    answer1: "CSS",
    answer2: "HTML",
    answer3: "Javascript",
    answer4: "Python"
};

startButton.addEventListener("click", function () {
    question.textContent = question1.question;
    ansButtons.setAttribute("class", "visible");
});