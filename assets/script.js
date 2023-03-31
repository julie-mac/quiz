//Setting up various variables necessary to our quiz
const startButton = document.getElementById("start");
const time = 60;
let timeLeft = time;
let score = 0;
let currentQuestion = 0;

//Storing the questions and answers in objects within an array
const questions = [{    
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
        question: "How would you dynamically create an element using Javascript?",
        choices: ["document.createElement(<new element>)", 
        "document.newEl('new element')", 
        "document.createElement('new element')", 
        "createElement('new element')"],
        answer: "document.createElement('new element')"
    },
    {
        question: "How would you then append that new element as the child of a target element?",
        choices: ["appendChild(target, new-element)", 
        "target.appendChild(new-element)", 
        "target.append(new-element)", 
        "target --> append(new-element)"],
        answer: "target.appendChild(new-element)"
    },
    {
        question: "How would you call the value of the FIRST item in an array?",
        choices: ["array(1)", 
        "array[1]", 
        "array[0]", 
        "array.0"],
        answer: "array[0]"
    },
    {
        question: "How would you log 'Hello World!' to the console?",
        choices: ["print('Hello World!)", 
        "log('Hello World!')", 
        "console.log(Hello World!)", 
        "console.log('Hello World!')"],
        answer: "console.log('Hello World!')"
    },
    {
        question: "How would you call the function someFunction?",
        choices: ["run someFunction()", 
        "someFunction()", 
        "someFunction", 
        "run(someFunction)"],
        answer: "someFunction()"
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
        const choice = document.createElement("button");
        choice.textContent = questions[currentQuestion].choices[i];
        choice.setAttribute("class", "choices")
        choiceContainer.appendChild(choice);

        choice.addEventListener("click", function(){
        if (choice.textContent === questions[currentQuestion].answer){
            score++;
            var display = document.createElement("p");
            display.textContent = "Correct! Good job!";
            questionContainer.appendChild(display);
        } else if (choice.textContent !== questions[currentQuestion].answer) {
            var display = document.createElement("p");
            display.textContent = "Incorrect. 10 seconds has been deducted from the timer.";
            timeLeft = timeLeft - 10;
            questionContainer.appendChild(display);
        }
    })
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
