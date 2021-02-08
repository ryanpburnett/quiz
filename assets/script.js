const start = document.getElementById("start")
const questionDiv = document.getElementById("question-div")
const answerDiv = document.getElementById("answer-div")
const btnDiv = document.getElementById("btn-div")
const a = document.getElementById("A")
const b = document.getElementById("B")
const c = document.getElementById("C")
const scoreP = document.getElementById("score-p")

let scoreValue = 0
scoreP.innerText=scoreValue

let questions = [
    {
        q: "What does HTML stand for?",
        a: "Humans Try Milking Llamas",
        b: "HyperText Markup Language",
        c: "HyperText Managing Language",
        ans: "B"
    },
    {
        q: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cuneiform Style Sheets",
        c: "Captain Sammy Says",
        ans: "A"
    },
    {
        q: "What Does JS stand for?",
        a: "Johan Sebastian (Bach)",
        b: "JavaStyle",
        c: "JavaScript",
        ans: "C"
    },
]

const timer = document.getElementById('timer')
let countDown = 100

function timerFunction() {
    if(countDown > 0){
        countDown--
        timer.innerText = countDown + ' seconds left'
    }else{
        alert("Time's up!")
        clearInterval(time)
    }
}

currentQ = 0
lastQIndex = questions.length

function startQuiz() {
    start.style.display = "none";
    questionDiv.style.display = "block";
    questionDiv.innerHTML = questions[currentQ].q;
    answerDiv.style.display = "block";
    answerDiv.innerHTML = 
    `<p>A:   ${questions[currentQ].a}</p> 
    <p>B:   ${questions[currentQ].b}</p> 
    <p>C:   ${questions[currentQ].c}</p>`;
    btnDiv.style.display = "block";
    scoreP.style.display = "block";
    setInterval(timerFunction, 1000);
}

function endQuiz(){
    if(scoreValue === lastQIndex){
        document.body.style.backgroundImage = 
        "url('./assets/trophy.jpg') height: 100"
        prompt("Perfect score!  You got a " + lastQIndex + "!\n Please enter your initials", "RPB");
    }else{
    prompt("Your score is " + scoreValue + "!!\n Please enter your initials", "RPB");
    }
    clearInterval()
}

function newQuestion() {
    if(currentQ < lastQIndex){
    questionDiv.innerHTML = questions[currentQ].q
    answerDiv.innerHTML = 
    `<p>A:   ${questions[currentQ].a}</p> 
    <p>B:   ${questions[currentQ].b}</p> 
    <p>C:   ${questions[currentQ].c}</p>`;
    }else{
        endQuiz()
    }
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
}

function answerIsIncorrect(){
    countDown-=10
    newQuestion();
}

document.getElementById("start").addEventListener("click", startQuiz)
document.getElementById("A").addEventListener("click", newQuestion)
document.getElementById("B").addEventListener("click", newQuestion)
document.getElementById("C").addEventListener("click", newQuestion)






// let rand = questions[Math.floor(Math.random() * questions.length)]
