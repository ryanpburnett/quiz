const start = document.getElementById("start")
const timer = document.getElementById('timer')
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
        ans: "B",
        joke: "A"
    },
    {
        q: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cuneiform Style Sheets",
        c: "Captain Sammy Says",
        ans: "A",
        joke: "C"
    },
    {
        q: "What Does JS stand for?",
        a: "Johan Sebastian (Bach)",
        b: "JavaStyle",
        c: "JavaScript",
        ans: "C",
        joke: "A"
    },
]

let countDown = 15

function timerFunction() {
    if(countDown > 0){
        countDown--
        timer.innerText = countDown + ' seconds left'
    }else{
        clearInterval()
        alert("Time's up!")
    }
    if(countDown < 11){
        timer.style.color = "red"
    }
}

currentQ = 0
lastQIndex = questions.length

function startQuiz() {
    start.style.display = "none";
    timer.style.display = "block";
    questionDiv.style.display = "block";
    questionDiv.innerHTML = questions[currentQ].q;
    answerDiv.style.display = "block";
    answerDiv.innerHTML = 
    `<p>A:   ${questions[currentQ].a}</p> 
    <p>B:   ${questions[currentQ].b}</p> 
    <p>C:   ${questions[currentQ].c}</p>`;
    btnDiv.style.display = "block";
    scoreP.style.display = "block";
    scoreP.innerHTML = "Score = " + scoreValue
    setInterval(timerFunction, 1000);
}

function endQuiz(){
    clearInterval()
    if(scoreValue === lastQIndex){
        alert("Perfect Score!!!")
    }
    let initials = prompt("Your score is " + scoreValue + "!\n Please enter your initials", "RPB");
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", scoreValue);
    let highScoreList = 
    localStorage.getItem("initials") + " " +
    localStorage.getItem("score");
    alert(highScoreList);
}

function newQuestion() {
    if(currentQ < lastQIndex){
    questionDiv.innerHTML = questions[currentQ].q
    answerDiv.innerHTML = 
    `<p>A: ${questions[currentQ].a}</p> 
    <p>B: ${questions[currentQ].b}</p> 
    <p>C: ${questions[currentQ].c}</p>`;
    }else{
        endQuiz()
    }
}

function checkAnswer(userAns){
    if (questions[currentQ].ans === userAns){
        answerIsCorrenct();
    }else if(questions[currentQ].joke === userAns){
        alert("C'mon, that's the joke answer!")
    }else{
        answerIsIncorrect();
    }
    currentQ++
}

function answerIsCorrenct(){
    scoreValue++;
    scoreP.innerText="Score = " + scoreValue;
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
