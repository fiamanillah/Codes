const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const qImg = document.getElementById('qImg');
const question = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const counter = document.getElementById('counter');
const timeGauge = document.getElementById('timeGauge');
const progress = document.getElementById('progress');
const scoreContainer = document.getElementById('scoreContainer');




let questions = [
    {
        question: 'HTML stands for',
        imgSrc: './img/html.png',
        choiceA: 'Correct',
        choiceB: 'Worng',
        choiceC: 'Worng',
        correct: 'A'
    },
    {
        question: 'CSS stands for',
        imgSrc: './img/css.png',
        choiceA: 'Worng',
        choiceB: 'Correct',
        choiceC: 'Worng',
        correct: 'B'
    },
    {
        question: 'JS stands for',
        imgSrc: './img/js.png',
        choiceA: 'Worng',
        choiceB: 'Worng',
        choiceC: 'Correct',
        correct: 'C'
    },
]


let lastQuestionIndex = questions.length - 1;
let currentQuestionIndex = 0;
let count = 0;
const gaugeWidth = 150;
const questionTime = 10;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score=0;

function renderQuestion() {
    let q = questions[currentQuestionIndex];

    question.innerHTML = `<p>${q.question}</p>`;
    qImg.innerHTML = `<img src="${q.imgSrc}">`;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;


};


start.addEventListener('click', startQuiz)

function startQuiz() {
    start.style.display = 'none'
    renderQuestion();
    progressRender();
    quiz.style.display = 'block'
    counterRender();
    TIMER = setInterval(counterRender, 1000);

}



function progressRender() {
    for (let index = 0; index <= lastQuestionIndex; index++) {
        progress.innerHTML += `<div class="prog" id="${index}"></div>`;

    }
};

function counterRender() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + 'px';
        count++
    } else {
        count = 0;
        answerIsWrong()
        if (currentQuestionIndex < lastQuestionIndex) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


function checkAnswer(answer) {
    if (answer === questions[currentQuestionIndex].correct) {
        score++
        answerIsCorrect()
        console.log(score)
    } else {
        answerIsWrong()
    }
    count = 0;
    if (currentQuestionIndex < lastQuestionIndex) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }


}

function answerIsCorrect() {
    document.getElementById(currentQuestionIndex).style.backgroundColor = '#0f0';
}

function answerIsWrong() {
    document.getElementById(currentQuestionIndex).style.backgroundColor = '#f00';
}

function scoreRender() {
    scoreContainer.style.display = 'block';

    const scorePercent = Math.round(100 * score / questions.length);

    let img =   (scorePercent >= 80) ? 'img/5.png' :
                (scorePercent >= 60) ? 'img/4.png' :
                (scorePercent >= 40) ? 'img/3.png' :
                (scorePercent >= 20) ? 'img/2.png' :
                'img/1.png';


    scoreContainer.innerHTML = `<img src='${img}' >`
    scoreContainer.innerHTML += `<p>${scorePercent}%</p>`;
}

console.log(score)