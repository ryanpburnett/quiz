// var h2 = document.getElementById('timerDown')
// var countDown = 100

// setInterval(function() {
//     countDown--
//     h2.innerText = "Timer: " + countDown;
// }, 1000)

// var BigRedButton = document.getElementById('start')

// var questions = [
//     {
//         question: "The answer to this question is 'A'",
//         choices: ['A', 'B', 'C'],
//         answer: 'A'
//     }
// ]

// BigRedButton.addEventListener('click', function() {         
//     document.getElementById("qBlock").innerHTML = questions[0]
// })

var startButton = document.getElementById('start')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startQuiz)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


var questions = [
  {
    question: 'The answer to this question is A.',
    answers: [
      { text: 'A', correct: true },
      { text: 'B', correct: false }
    ]
  },
  {
    question: 'is this a question?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false }
    ]
  },
]