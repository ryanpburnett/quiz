// click start button
  // timer starts
  // I see a question
var startButton = document.getElementById('start')
var h2 = document.getElementById('timerDown')
// When I answer
  // I see another question
// When I answer incorrectly
  // Time is subtracted from clock
// When all are answered OR timer reaches 0
  // Then game is over
// When game is over
  // Then I can save initials and score

startButton.addEventListener('click', startQuiz)

function startQuiz() {
  startButton.classList.add('hide')

  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}



// var nextButton = document.getElementById('next-btn')
// var questionContainerElement = document.getElementById('question-container')
// var questionElement = document.getElementById('question')
// var answerButtonsElement = document.getElementById('answer-buttons')

// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })


// var questions = [
//   {
//     question: 'The answer to this question is A.',
//     answers: [
//       { text: 'A', correct: true },
//       { text: 'B', correct: false }
//     ]
//   },
//   {
//     question: 'is this a question?',
//     answers: [
//       { text: 'Yes', correct: true },
//       { text: 'No', correct: false }
//     ]
//   },
// ]







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
