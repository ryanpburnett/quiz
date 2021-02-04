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


currentQ = 0

function newQuestion() {
    start.style.display = "none";
    questionDiv.style.display = "block";
    questionDiv.innerHTML = questions[currentQ].q;
    currentQ++
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    scoreP.style.display = "block";
}

document.getElementById("start").addEventListener("click", newQuestion)
document.getElementById("A").addEventListener("click", newQuestion)
document.getElementById("B").addEventListener("click", newQuestion)
document.getElementById("C").addEventListener("click", newQuestion)






// let rand = questions[Math.floor(Math.random() * questions.length)]
