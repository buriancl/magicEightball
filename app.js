const nameForm = document.getElementById("name-form");
const userName = document.getElementById("name-input");
const questionForm = document.getElementById("question-form");
const questionInput = document.getElementById("question-input");
const questionLabel = document.getElementById("question-label");
const userQuestion = document.getElementById("user-question");
const eightballAnswer = document.getElementById("eightball-answer");
const answerContainer = document.getElementById("answer-container");
let eightBall = '';

nameForm.addEventListener("submit", function (event) {
    event.preventDefault();
    questionLabel.innerHTML = `Hello ${userName.value}, please ask a question!`;
    questionForm.style.display = 'flex';
});

questionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    userQuestion.innerHTML = `${userName.value} asks: ${questionInput.value}`;
    oracle();
    eightballAnswer.innerHTML = eightBall;
    answerContainer.style.display = 'flex';
});

function oracle() {
    let randomNumber = Math.floor(Math.random() * 8);
    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'Reply hazy, try again'
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Dont count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            break;
    }
}