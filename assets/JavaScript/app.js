let questionNum = 0;
let score = 0
let intervalId
let timeoutId

let qText = $('#questionText');
let btnA = document.getElementById("aBtn") ;
let btnB = document.getElementById("bBtn") ;
let btnC = document.getElementById("cBtn") ;
let btnD = document.getElementById("dBtn") ;

let vals = document.getElementsByClassName("answerBtn");
let startBtn = document.getElementById("startBtn");
let timerGoesHere = document.getElementById("timerGoesHere");
let questions = {
    q1: {
        question: ["Does the word cat begin with the letter 'c'?"],
        val1 : "yes - it does!" ,
        val2 :"no - 'cat' begins with g" ,
        val3 : "no - 'cat' begins with y" ,
        val4 : "no - 'cat' begins with k",
        funs: ["l()","w()","w()","w()"]
    },
    q2: {
        question: "Does the word oranges begin with the letter 'o'?",
        val1 : "no - 'oranges' begins with the letter y" ,
        val2 :"no - 'oranges' begins with the letter y"  ,
        val3 : "yes - 'oranges' begins with o" ,
        val4 : "no - 'oranges' begins with k" ,
        funs: ["w()","w()","l()","w()"]  
    },
    q3: {
    question: "What is 5+5?",
    val1 : "no - cat = 5" ,
    val2 : "2",
    val3 : "yes - 'oranges' begins with o" ,
    val4 : "10",  
    funs: ["w()","w()","w()","l()"] 
    },
    q4:{
    question: "What is the last letter in the alphabet?",
    val1 : "z" ,
    val2 : "y" ,
    val3 : "x",
    val4 : "w",
    funs: ["l()","w()","w()","w()"] 
    },
    q5:{
    question: "How many legs do dogs usually have?",
    val1 : "no - cat = 5" ,
    val2 :"42"  ,
    val3 : "yes - 'oranges' begins with o" ,
    val4 : "4",
    funs: ["w()","w()","w()","l()"]   
    }
}


function l(){
    score++
    console.log("score: " + score)
    console.log("you pressed the right answer ")
}

function w(){
    console.log("you pressed the wrong answer ")
}

function myFun1(){
timeoutId = setTimeout(displayQ,0);
    //myFun1();
}
            
function displayQ (){
    questionNum++; 
    var q = questions.q1.question[0];
    qText.html(q)
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
