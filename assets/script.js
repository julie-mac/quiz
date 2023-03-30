const startButton = document.getElementById("start");
const time = 60;
let timeLeft = time;
let score = 0;
let currentQuestion = 0;


const questions = [  {    
        question: "How do you get an HTML element to call a function when the user clicks it?",
        choices: ["someElement.addClickEvent(function)", 
        "someElement.addEventListener('click', someFunction)", 
        "someElement.addEvent('click', someFunction)",
        "someElement.click(someFunction)"],
        answer: "someElement.addEventListener('click', someFunction)"
    },
    {
        question: "How do you define a value inside a variable?",
        choices: ["var someVar = 'some value'", 
        "variable someVar = 'some value'",
        "var someVar('some value')",
        "variable --> someVar = 'some value'"],
        answer: "var someVar = 'some value'"
    },
    {
        question: "Which planet rules over communication in astrology?",
        choices: ["Mars", "Mercury", "Venus", "Neptune"],
        answer: "Mercury"
    },
    {
        question: "How many different branches of astrology exist?",
        choices: ["5", "10", "15", "80+"],
        answer: "80+"
    }]

startButton.addEventListener("click", runQuiz);

function displayQuestion() {
   
    const questionContainer = document.getElementById("question-container");
    const questionTitle = document.createElement("h2");
    questionTitle.textContent = questions[currentQuestion].question;
    questionContainer.appendChild(questionTitle);

    const choiceContainer = document.createElement("div");
    choiceContainer.setAttribute("id", "choice-container");
    for (i=0 ; i<questions[currentQuestion].choices.length ; i++) {
        const choice = document.createElement("p");
        choice.textContent = questions[currentQuestion].choices[i];
        choice.setAttribute("class", "choices")
        choiceContainer.appendChild(choice);

        choice.addEventListener("click", function(){
        if (choice.textContent === questions[currentQuestion].answer){
            score++;
            var display = document.createElement("p");
            display.textContent = "Correct! Good job!";

        }})
    }
    questionContainer.appendChild(choiceContainer);

}

    function runQuiz() {
    startButton.style.display = "none";

    const timerSet = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent = `Time remaining: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timerSet);
        }
    }, 1000);

    displayQuestion(); }
