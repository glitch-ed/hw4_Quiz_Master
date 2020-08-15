//I need a var for my question objects.

/*
const questions =
[
  {
    text: 'What is an array?',
    answers:
    [
        { text: "Option 1", score: -5 },
        { text: "Option 2", }
    ]
  } 
];
*/



var questions = [{
    "q":"What is an array?",
    "a1":"The best way to get an element by it's id",
    "a2":"It assigns value to a variable",
    "a3":"It is used to store multiple values in a single variable.",
    "a4":"A block of code used to perform a particular task.",
    "anw":3
}, {
    "q":"What is a function?",
    "a1":"It logs data to the console.",
    "a2":"A block of code used to perform a particular task.",
    "a3":"It is used to store multiple values in a single variable.",
    "a4":"The bet way to get an element by it's consol id.",
    "anw":2
}, {
    "q":"What symbols are used to call a function?",
    "a1":"<>",
    "a2":"()",
    "a3":"**",
    "a4":"??", 
    "anw":2
}, {
    "q":"What does the function math.random() return?",
    "a1":"a random number between 0 and 1 not including 1",
    "a2":"a random number between 0 and 10 not including 10",
    "a3":"a random number between 0 and 100 not including 100",
    "a4":"a random number between 0 and 1000 not including 1000",
    "anw":1
}, {
    "q":"What value does array.length return?",
    "a1":"The length of the for loop.",
    "a2":"The length of the while loop",
    "a3":"The length of the math.random function.",
    "a4":"The length of the array.",
    "anw":4

}]


//var I will need to get a hold of elements



var questionEl = document.getElementById("ask");
var score = document.getElementById("score")
var currentScore =0
var right = document.getElementById("right")
var displayQuest = {}
var questLog = [];
var answer = Array.from(document.querySelectorAll(".ans"));
var correctAns = false;
var seconds = document.getElementById("seconds")
var secondsLeft = 60;
var body = document.querySelector("body");
var start = document.querySelector(".start");


// timer count down from 60
start.addEventListener("click", startTimer)
function startTimer() { 
    if(startTimer) start.style.display = "none";
    var interval = setInterval(function(){
    secondsLeft--;
    if (secondsLeft === 0){
        body.setAttribute("style", "background-color:red");
    }if (secondsLeft < 0){
        clearInterval(interval);
    }else {
        seconds.textContent = secondsLeft;
        console.log(secondsLeft)
    }
  }, 1000)
}

start.addEventListener("click", startQuiz)
function startQuiz () {
    score = 0;
    questLog = [...questions];
    console.log(questLog)
  
    newQuest();
};

start.addEventListener("click", newQuest)
function newQuest() {
    var questIndex = Math.floor(Math.random() * questLog.length);
    displayQuest = questLog[questIndex];
    questionEl.innerText = displayQuest.q;
    
    answer.forEach(selection => {
        var number = selection.dataset["number"];
        selection.innerText = displayQuest["a" + number]
    });
   
    questLog.splice(questIndex, 1);

    correctAns = true;

    if (questLog.length === 0) {
        return;
    
    }
};

answer.forEach(selection => {
    selection.addEventListener("click", e => {
        console.log(e.target)
        if(!correctAns) return;
        correctAns = false;
        var pickSelect = e.target;
        var pickAns = pickSelect.dataset["number"];
        console.log(pickAns == displayQuest.anw);
       
        
        newQuest();

    });
});
    

keepScore



  



