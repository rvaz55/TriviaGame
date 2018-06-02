let questionsAnswered = 0
let score = 0

let qLocation = document.getElementById("questionsDiv") 
let btnA = document.getElementById("aBtn") ;
let btnB = document.getElementById("bBtn") ;
let btnC = document.getElementById("cBtn") ;
let btnD = document.getElementById("dBtn") ;

let vals = document.getElementsByClassName("answerBtn");

let startBtn = document.getElementById("startBtn");

let timerGoesHere = document.getElementById("timerGoesHere");

let Q1 = {
    question: "Does the word cat begin with the letter 'c'?",
    val1 : "yes - it does!" ,
    val2 :"no - 'cat' begins with g" ,
    val3 : "no - 'cat' begins with y" ,
    val4 : "no - 'cat' begins with k",
    funs: ["l()","w()","w()","w()"]  ,
}

let Q2 = {
    question: "Does the word oranges begin with the letter 'o'?",
    val1 : "no - 'oranges' begins with the letter y" ,
    val2 :"no - 'oranges' begins with the letter y"  ,
    val3 : "yes - 'oranges' begins with o" ,
    val4 : "no - 'oranges' begins with k" ,
    funs: ["w()","w()","l()","w()"]  
}

let Q3 = {
    question: "What is 5+5?",
    val1 : "no - cat = 5" ,
    val2 : "2",
    val3 : "yes - 'oranges' begins with o" ,
    val4 : "10",  
    funs: ["w()","w()","w()","l()"] 
}

let Q4 = {
    question: "What is the last letter in the alphabet?",
    val1 : "z" ,
    val2 : "y" ,
    val3 : "x",
    val4 : "w",
    funs: ["l()","w()","w()","w()"] 
}

let Q5 = {
    question: "How many legs do dogs usually have?",
    val1 : "no - cat = 5" ,
    val2 :"42"  ,
    val3 : "yes - 'oranges' begins with o" ,
    val4 : "4",
    funs: ["w()","w()","w()","l()"]   
}

let resp1 
let resp2 
let resp3 
let resp4 


function l(){
    score++
    console.log("score: " + score)
    console.log("you pressed the right answer ")
    
}

function w(){
    console.log("you pressed the wrong answer ")
}

//setting the onclick function to the appropriate funl or funW

//remember: you cannot pair a for-loop with a function
//this is bc functions can only exist when they are in the 
//body of an if-statement, are in code block, or
//are top-level functions. They cannot exist when paired
//with for-loops!
//so I placed the for-loop inside the myFun1()

//qArr = [Q1,Q2,Q3,Q4,Q5]

let dog = setInterval(myFun1,0,10000)

let time = 10

function basket(){
    let j = time--
    startBtn.innerHTML = j

    if (time === 0)
time = 10    }


let countdownNum = setInterval(basket, 1000)

let qArr = [Q1,Q2,Q3,Q4,Q5]
let i = 0

function myFun1(){
        for (i =i;;){

            if (0 <= i <= 4)
            qArr = [Q1,Q2,Q3,Q4,Q5]
            qLocation = document.getElementById("questionsDiv") 
            qLocation.innerHTML = qArr[i].question
            btnA.innerHTML = qArr[i].val1
            btnB.innerHTML = qArr[i].val2
            btnC.innerHTML = qArr[i].val3
            btnD.innerHTML = qArr[i].val4
            let resp1 = qArr[i].funs[0]
            let resp2 = qArr[i].funs[1]
            let resp3 = qArr[i].funs[2]
            let resp4 = qArr[i].funs[3]
            //now i need to access the onclick attribute and set the attribute
            //to the designated function 
            //the 'funs' arrary in the Q1
            //console.log("this is under myFun1 dec.: " + Q1.funs[0])
            //create the location of the place that i need to append to 
            //the code below sets the onclick attr of the answer buttons
            //to trigger the 'l' or 'w' functions
            btnA.setAttribute("onclick",resp1)
            btnB.setAttribute("onclick",resp2)
            btnC.setAttribute("onclick",resp3)
            btnD.setAttribute("onclick",resp4)
            countdownNum
        //updated Qanswered here here
            questionsAnswered++
            console.log("this is the value of qArr[i]: " + qArr[i])
            //clearInterval(dog)
            i++}
            //myFun1(i)}
            
    }


        
    
       
        
//can put another conditional here if i want




//get ride of the setTime and instead use the following
//setInterval to start the timer
//clear interval for right or wrong answer
//maybe a setTimeout to show the 'questions right/wrong"
//setTimeout(function() {})
