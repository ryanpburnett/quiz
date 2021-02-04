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
        q: "The answer is A.",
        a: "A",
        b: "B",
        c: "C",
        ans: "A",
    },
    {
        q: "The answer is X.",
        a: "X",
        b: "Y",
        c: "Z",
        ans: "A",
    },
    {
        q: "The answer is F.",
        a: "F",
        b: "G",
        c: "H",
        ans: "A",
    },
]

function startQuiz() {
    start.style.display = "none";
    questionDiv.style.display = "block";
    questionDiv.innerHTML = questions[currentQ].q;
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    scoreP.style.display = "block";
}

currentQ = 0
lastQIndex = questions.length -1

function newQuestion() {
    if(currentQ < lastQIndex){
    questionDiv.innerHTML = questions[currentQ].q;
    currentQ++
    }else{
        console.log("finished")
    }
}

function answerIsCorrenct(){
    console.log("correct")
}

function answerIsIncorrect(){
    console.log("wrongamundo")
}

function checkAnswer(userAns){
    if (questions[currentQ].ans === userAns){
        scoreValue++;
        scoreP.innerText=scoreValue;
        answerIsCorrenct();
    }else{
        answerIsIncorrect();
    }
}

document.getElementById("start").addEventListener("click", startQuiz)
document.getElementById("A").addEventListener("click", newQuestion)
document.getElementById("B").addEventListener("click", newQuestion)
document.getElementById("C").addEventListener("click", newQuestion)






// let rand = questions[Math.floor(Math.random() * questions.length)]
