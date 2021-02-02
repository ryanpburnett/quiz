const start = document.getElementById("start")
const questionDiv = document.getElementById("question-div")
const a = document.getElementById("A")
const b = document.getElementById("B")
const c = document.getElementById("C")
const scoreDiv = document.getElementById("score-div")
let score = 0

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

document.getElementById("start").addEventListener("click", newQuestion)
document.getElementById("A").addEventListener("click", newQuestion)
document.getElementById("B").addEventListener("click", newQuestion)
document.getElementById("C").addEventListener("click", newQuestion)

function newQuestion() {
    start.style.display = "none";
    questionDiv.style.display = "block";
    questionDiv.innerHTML = questions[currentQ].q;
    currentQ++
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    score.style.display = "block";
}





// let rand = questions[Math.floor(Math.random() * questions.length)]
