var h2 = document.getElementById('timerDown')
var countDown = 100

setInterval(function() {
    countDown--
    h2.innerText = "Timer: " + countDown;
}, 1000)

var BigRedButton = document.getElementById('start')

var questions = [
    {
        question1: "The answer to this question is 'A'",
        choices: ['A', 'B', 'C'],
    }
]

BigRedButton.addEventListener('click', function() {         
    document.getElementById("qBlock").innerHTML = questions[0]
})

