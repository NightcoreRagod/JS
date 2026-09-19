const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-Button");
const questionText = document.getElementById("question-Text")
const answerContainer = document.getElementById("answer-Container");
const CurrentQuestionSpan = document.getElementById("Current-Question");
const totalQuestionSpan = document.getElementById("total-Question");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-Score");
const maxScoreSpan = document.getElementById("max-Score");
const resultMessage = document.getElementById("result-Message");
const restartButton = document.getElementById("restart-Btn");
const progressBar = document.getElementById("progress");

const quizQuestions =[{
    question: "What is the capital of France?",
    answer:[
        {Text:"London", correct: false},
        {Text:"Berlin", correct: false},
        {Text:"Paris", correct: true},
        {Text:"Madrid", correct: false},
    ],

},{
    question: "What is the largest ocean on Earth?",
    answer:[
        {Text:"Atlantic Ocean", correct: false},
        {Text:"Indian Ocean", correct: false},
        {Text:"Arctic Ocean", correct: false},
        {Text:"Pacific", correct: true},
    ],

},{
    question: "What is the chemical of gold?",
    answer:[
        {Text:"Gd", correct: false},
        {Text:"Go", correct: false},
        {Text:"Au", correct: true},
        {Text:"Ag", correct: false},
    ],
  
},{
    question: "Which planet is known as the Red Planet?",
    answer:[
        {Text:"Venus", correct: false},
        {Text:"Mars", correct: true},
        {Text:"Jupiter", correct: false},
        {Text:"Saturn", correct: false},
    ],

},{
    question: "Which of these is not a programming Language?",
    answer:[
        {Text:"Java", correct: false},
        {Text:"python", correct: false},
        {Text:"ox", correct: true},
        {Text:"JavaScript", correct: false},
    ],

}];
 
let CurrentQuestionIndex = 0;
let score = 0;
let answersDisabled = false

totalQuestionSpan.textContent= quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners

startButton.addEventListener("click",startQuiz);
restartButton.addEventListener("click",restartQuiz);

function startQuiz(){
    CurrentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}

function showQuestion(){

    answersDisabled = false

    const currentQuestion = quizQuestions[CurrentQuestionIndex]

    CurrentQuestionSpan.textContent= CurrentQuestionIndex + 1;

    const progressPercent = (CurrentQuestionIndex/quizQuestions.length) * 100;

    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML="";

     currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        button.dataset.correct = answer.correct

        button.addEventListener("click",selectAnswer)

        answerContainer.appendChild(button);
     });
}

function selectAnswer(event) {
    if(answersDisabled) return

    answersDisabled = true

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct==="true"

    Array.from(answerContainer.children).forEach(button=>{
        if(button.dataset.correct ==='true'){
            button.classList.add("correct")
        }else{
            button.classList.add("incorrect")
        }
    });

    if(isCorrect){
        score++;
        scoreSpan.textContent = score
    }
}

setTimeout (()=>{
    CurrentQuestionIndex++;

    if(CurrentQuestionIndex<quizQuestions.length){
        showQuestion()
    }else{
        showResults()
    }
},1000)

function showResults(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score;

    const percentage =(score/quizQuestions.length) * 100

    if(percentage === 100){
        resultMessage.textContent = "Perfect! your a genius";
    }else if(percentage>=80){
        resultMessage.textContent = "Great! you know your stuff";
    }else if(percentage>=60){
        resultMessage.textContent = "Good effort! Keep learning";
    }else if(percentage>=40){
        resultMessage.textContent = "Not Bad! Try again to improve";
    }else{
        resultMessage.textContent = "Keep Studying! you'll get better";
    }
}

function restartQuiz(){
    resultScreen.classList.remove("active");

    startQuiz();
}
