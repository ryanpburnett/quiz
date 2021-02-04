const start = document.getElementById("start")
const questionDiv = document.getElementById("question-div")
const a = document.getElementById("A")
const b = document.getElementById("B")
const c = document.getElementById("C")
const scoreP = document.getElementById("score-p")

let scoreValue = 0
scoreP.innerText=scoreValue

let questions = [
    {
        q: "Question 1.",
        a: "A",
        b: "B",
        c: "C",
        ans: "A"
    },
    {
        q: "Question 2.",
        a: "A",
        b: "B",
        c: "C",
        ans: "A"
    },
    {
        q: "Question 3.",
        a: "A",
        b: "B",
        c: "C",
        ans: "A"
    },
]

const timer = document.getElementById('timer')
let countDown = 100

currentQ = 0
lastQIndex = questions.length

console.log(lastQIndex)

function startQuiz() {
    start.style.display = "none";
    questionDiv.style.display = "block";
    questionDiv.innerHTML = questions[currentQ].q;
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    scoreP.style.display = "block";
    setInterval(function() {
        countDown--
        timer.innerText = countDown + ' seconds left'
    }, 1000);
    console.log(currentQ)
}

function endQuiz(){
    alert("Your score is " + scoreValue + "!")
    console.log(currentQ)
}

function newQuestion() {
    if(currentQ < lastQIndex){
    questionDiv.innerHTML = questions[currentQ].q
    
    }else{
        endQuiz()
        console.log("finished")
    }
    console.log(currentQ)
}

function checkAnswer(userAns){
    if (questions[currentQ].ans === userAns){
        answerIsCorrenct();
    }else{
        answerIsIncorrect();
    }
    currentQ++
}

function answerIsCorrenct(){
    scoreValue++;
    scoreP.innerText=scoreValue;
    newQuestion();
    console.log("correct")
}

function answerIsIncorrect(){
    newQuestion();
    console.log("wrongamundo")
}

document.getElementById("start").addEventListener("click", startQuiz)
document.getElementById("A").addEventListener("click", newQuestion)
document.getElementById("B").addEventListener("click", newQuestion)
document.getElementById("C").addEventListener("click", newQuestion)






// let rand = questions[Math.floor(Math.random() * questions.length)]
