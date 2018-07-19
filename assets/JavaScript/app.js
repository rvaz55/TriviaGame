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
var questions = [
    "Does the word cat begin with the letter 'c'?",
    "Does the word oranges begin with the letter 'o'?",
    "What is the last letter in the alphabet?",
    "How many legs do dogs usually have?",
    "What is the sum of 5+5?",
]

function myFun1(){
timeoutId = setTimeout(displayQ,0);
var foo = questions[questionNum]
            console.log(foo)
            qText.html(foo);
}
            
function displayQ (){
   
    if (questionNum < 5){
        var nextQ = setInterval(function(){
            questionNum++
            var foo = questions[questionNum]
            console.log('this is the value of questionNum: ' + questionNum)
           
            qText.html(foo);
            displayQ();}, 5000)
        
    } 
    else if (questionNum === 5){
        console.log('this is the value of questionNum' + questionNum)
        clearInterval(nextQ);
        clearTimeout(timeoutId)

    }

        
}


//get ride of the setTime and instead use the following
//setInterval to start the timer
//clear interval for right or wrong answer
//maybe a setTimeout to show the 'questions right/wrong"
//setTimeout(function() {})
