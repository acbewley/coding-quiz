var startButton = document.querySelector("#answer-1");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer-1");
var answer2 = document.querySelector("#answer-2");
var answer3 = document.querySelector("#answer-3");
var answer4 = document.querySelector("#answer-4");
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

// startButton.addEventListener("click", function () {
//     question.textContent = question1.question;
//     answer2.setAttribute("class", "visible btn btn-info")
//     answer3.setAttribute("class", "visible btn btn-info")
//     answer4.setAttribute("class", "visible btn btn-info")
//     answer1.innerHTML = question1.answer1
//     answer2.innerHTML = question1.answer2
//     answer3.innerHTML = question1.answer3
//     answer4.innerHTML = question1.answer4
// });