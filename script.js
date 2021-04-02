//start game DOMElements

const gameStartedHeader = document.getElementById('game-startedheader');
const questionNumber = document.getElementById('question-number');
const beginHeader = document.getElementById('begin-header');
const beginButton = document.getElementById('begin-button');
const begin = document.getElementById('begin');
const questionOne = document.getElementById('question-one');
const movementContainer = document.getElementById('movement-container');
const questionOnPage = document.getElementById('question');
const backButton = document.getElementById('back-button');


//question var
let question = 0;

beginButton.onclick = beginGame;

//game begin change DOM to question 1
function beginGame() {
begin.style.color = 'white';
begin.style.backgroundColor = 'red';
setTimeout(function(){
beginButton.style.display = 'none';
beginHeader.style.display = 'none';
gameStartedHeader.style.display = 'flex';
addQuestion();
setAnswers();
setQuestion();
questionOne.style.display = 'flex';
}, 200)
}

//add 1 to question var
function addQuestion(){
    question +=1;
    questionNumber.innerHTML = question + '/10'; 
}
//subtract to question var
function subtractQuestion(){
    question -=1;
    questionNumber.innerHTML = question + '/10';
}
    
    
const answers = [['Placeholder'],['A cup of Jesus', 'Coffee', 'Beer', 'Kumbocha'],['Mini-van','Car','Jack-Up Truck','Bike/Walk'],['Christian Flag', 'USA Flag', 'Civil War Flag', 'Political Flag']]
const questions = ['Placeholder', 'What do you drink with your breakfast?', 'How do you get to work?','Which flag is most important to you?']

const userAnswers = [];

const answerOne = document.getElementById('a1');
const answerTwo = document.getElementById('a2');
const answerThree = document.getElementById('a3');
const answerFour = document.getElementById('a4');

answerOne.onclick = selectButton;
answerTwo.onclick = selectButton;
answerThree.onclick = selectButton;
answerFour.onclick = selectButton;
backButton.onclick = backPage;
function selectButton(event){
  event.target.style.backgroundColor = 'red';
  event.target.style.color = 'white';
  userAnswers.push(event.target.value);
setTimeout(function(){
  addQuestion();  
  setAnswers(); 
  setQuestion(); 
  displayBackButton();
  event.target.style.backgroundColor = '';
  event.target.style.color = '';
}, 200);
}

function backPage() {
    subtractQuestion();
    setQuestion();
    setAnswers();
    turnOffBackButton();
}
 
function setAnswers() {
    answerOne.innerHTML = answers[question][0];
    answerTwo.innerHTML = answers[question][1];
    answerThree.innerHTML = answers[question][2];
    answerFour.innerHTML = answers[question][3];
}

function setQuestion() {
   questionOnPage.innerHTML = questions[question];
}

function displayBackButton() {
    if(question > 1){
        movementContainer.style.display = 'flex';
    }
}

function turnOffBackButton(){
    if(question === 1){
        movementContainer.style.display = 'none';
    }
}