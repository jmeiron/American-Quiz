//Elements
const gameStartedHeader = document.getElementById('game-startedheader');
const questionNumber = document.getElementById('question-number');
const beginHeader = document.getElementById('begin-header');
const beginButton = document.getElementById('begin-button');
const begin = document.getElementById('begin');
const questionOne = document.getElementById('question-one');
const movementContainer = document.getElementById('movement-container');
const questionOnPage = document.getElementById('question');
const backButton = document.getElementById('back-button');
const restart = document.getElementById('restart');
const answerOne = document.getElementById('a1');
const answerTwo = document.getElementById('a2');
const answerThree = document.getElementById('a3');
const answerFour = document.getElementById('a4');

//vars

let question = 0;
const userAnswers = [];
let bibleBeater = 0;
let trueBlood = 0;
let redNeck = 0;
let hipster = 0; 

//questions and answers

const answers = [['Placeholder'],['A cup of Jesus', 'Coffee', 'Beer', 'Kumbocha'],['Mini-van','Car','Jack-Up Truck','Bike/Walk'],['Christian Flag', 'USA Flag', 'Civil War Flag', 'Political Flag'],['Going to Church','Watching Football','Drinking on the front lawn','Smoking weed and chill'],['Lauren Daigle','Foo Fighters','Upchurch','Glass Animals'],['Potluck', 'Diner','Buffet','Bistro'],['Within 10 min of my family', 'Suburbs','Country','City'],['I vote my morals','American Duty',`Don't care`,'My vote matters'],[`Lord Savior's Birth`,'Giving back to my community','Hanging with family is cool','Pagan holiday'],['Non-religious','Socialism','What are those?','Capitalism']]
const questions = ['Placeholder', 'What do you drink with your breakfast?', 'How do you get to work?','Which flag is most important to you?','What is your perfect Sunday?','Which of these is the best band?','Which of these is best?','What type of housing do you prefer?','How do you feel about voting?','What does Christmas mean to you?','Which word makes you feel most uncomfortable?']

//eventListeners

beginButton.onclick = beginGame;
answerOne.onclick = selectButton;
answerTwo.onclick = selectButton;
answerThree.onclick = selectButton;
answerFour.onclick = selectButton;
backButton.onclick = backPage;
restart.onclick = restartPage;




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

//When button is clicked

function selectButton(event){  
  event.target.style.backgroundColor = 'red';
  event.target.style.color = 'white';
  userAnswers.push(event.target.value);
  if(question === 10){
  calculateScore();
  event.target.style.backgroundColor = '';
  event.target.style.color = '';
  }else{
  setTimeout(function(){
  addQuestion();  
  setAnswers(); 
  setQuestion(); 
  displayBackButton();
  event.target.style.backgroundColor = '';
  event.target.style.color = '';
   }, 200);
  }
}

//Back button is clicked

function backPage(event) {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'white';
    userAnswers.pop();
    subtractQuestion();
    setTimeout(function(){
    setQuestion();
    setAnswers();
    turnOffBackButton();
  event.target.style.backgroundColor = '';
  event.target.style.color = '';
    }, 200)
}

//Set answers in DOM

function setAnswers() {
    answerOne.innerHTML = answers[question][0];
    answerTwo.innerHTML = answers[question][1];
    answerThree.innerHTML = answers[question][2];
    answerFour.innerHTML = answers[question][3];
}

//Set questions in DOM

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

function restartPage(event) {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'white';
    setTimeout(function(){
     window.location.href = './American-Quiz.html'; 
    }, 200)
}


//calucate score on final question

function calculateScore() {
 userAnswers.forEach(Element => {
     if(Element === 'BB'){
    bibleBeater++;
     }else if(Element === 'TB'){
    trueBlood++;
     }else if(Element === 'RN'){
    redNeck++
     }else if(Element === 'HS'){
     hipster++;    
     }
    }
 )
 backButton.style.display = 'none';
 restart.style.display = 'flex';
 restart.style.marginTop = '15%'
 answerOne.style.display = 'none';
 answerTwo.style.display = 'none';
 answerThree.style.display = 'none';
 answerFour.style.display = 'none';
 gameStartedHeader.style.display = 'none';
 if(redNeck > 6){
 questionOnPage.innerHTML = `Congrats, you're an American Redneck! Nothing sounds better to you than drinking beer and shooting guns!`
 }else if(bibleBeater > 6){
    questionOnPage.innerHTML = `Congrats, you're an American Bible beater! Most of you're time is spent worshiping Jesus!`
 }else if(trueBlood > 6){
    questionOnPage.innerHTML = `Congrats, you're a True Blood American! You bleed Red, White, and Blue!`
 }else if(hipster > 6){
    questionOnPage.innerHTML = `Congrats, you're an American Hipster! You just want everybody to be treated fairly!`
}else if(hipster > 2 && trueBlood > 2){
    questionOnPage.innerHTML = `Congrats, you're mix between an American True blood and Hipster!`
}else if(bibleBeater >  2 && redNeck > 2){
    questionOnPage.innerHTML = `Congrats, you're mix between an American Bible beater and Redneck!`
}else if(trueBlood > 2 && bibleBeater> 2){
    questionOnPage.innerHTML = `Congrats, you're mix between an American True Blood and Bible beater!`
}else if(hipster > 2 && redNeck > 2){
    questionOnPage.innerHTML = `Congrats, you're mix between an American Redneck and Hipster!`
}else{
     questionOnPage.innerHTML = 'Your a mixture of everything!'
 }
}

