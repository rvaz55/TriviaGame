let questionNum = 0;
let score = 0
let intervalId
let timeoutId

let qText = $('#questionText');
let btnA = $("#aBtn") ;
let btnB = $("#bBtn") ;
let btnC = $("#cBtn") ;
let btnD =$("#dBtn") ;

let vals = document.getElementsByClassName("answerBtn");
let startBtn = document.getElementById("startBtn");
let questions = [
    "Does the word cat begin with the letter 'c'?",
    "Does the word oranges begin with the letter 'o'?",
    "What is 5+5?",
    "What is the last letter in the alphabet?",
    "How many legs do dogs usually have?"
]


function myFun1(){
timeoutId = setTimeout(displayQ,0);
    //myFun1();
}
            
function displayQ (){
console.log(questionNum)

var foo = questions[questionNum]
console.log(foo)
        qText.html(foo)
        
}
// function something (){
//     questionNum++;
//     console.log(questionNum)
 
// if (questionNum === 5 ){
// console.log(`questionNum= ${questionNum}`)
// questionNum = 0
// console.log(`questionNum= ${questionNum}`)
// clearInterval (intervalId)
// clearTimeout(timeoutId)}
// }


//get ride of the setTime and instead use the following
//setInterval to start the timer
//clear interval for right or wrong answer
//maybe a setTimeout to show the 'questions right/wrong"
//setTimeout(function() {})
