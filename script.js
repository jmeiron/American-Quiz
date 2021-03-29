//start game

const gameStartedHeader = document.getElementById('game-startedheader');
const questionNumber = document.getElementById('question-number');
const beginHeader = document.getElementById('begin-header');
const beginButton = document.getElementById('begin-button');
const begin = document.getElementById('begin');
const questionOne = document.getElementById('question-one')

let question = 0;

beginButton.onclick = beginGame;

function beginGame() {
begin.style.color = 'white';
begin.style.backgroundColor = 'red';
setTimeout(function(){
beginButton.style.display = 'none';
beginHeader.style.display = 'none';
gameStartedHeader.style.display = 'flex';
addQuestion();
questionOne.style.display = 'flex';
questionNumber.innerHTML = question + '/10';    
}, 200)
}

function addQuestion(){
    question +=1;
}

//first question is in the DOM

const questionOneAnswerOne = document.getElementById('q1a1');

questionOneAnswerOne.onclick = function(){
    questionOneAnswerOne.style.color = 'white';
    questionOneAnswerOne.style.backgroundColor = 'red';
}
