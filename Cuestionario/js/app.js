

let questionCounter = 0;
let currentQuestion;
let avaibleQuestion = [];
let avaibleOptions = [];
let correctAnswers= 0;
let attempt = 0;

// push the questions into avaibleQuestion Array
function setAvaibleQuestion(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        avaibleQuestion.push(quiz[i])
    }
}
// set question number and question and options
function getNewQuestion(){
    // set question number
    document.querySelector(".question-number").innerHTML = "Pregunta " + (questionCounter + 1) + " de " + quiz.length;

    // set random question text
    const questionIndex = avaibleQuestion[Math.floor(Math.random() * avaibleQuestion.length)];
    currentQuestion = questionIndex;
    document.querySelector(".question-text").innerHTML = currentQuestion.q;

    // get the position  of 'questionIndex' from the avaibleQuestion Array
    const index1 = avaibleQuestion.indexOf(questionIndex);

    // remove the 'questionIndex' from the avaibleQuestion Array, so that  the question does not repeat
    avaibleQuestion.splice(index1,1);

    // set option
    // get the  length of options
    const optionLen = currentQuestion.options.length;

    // push the options into avaibleOptions Array
    for(let i=0; i<optionLen; i++){
        avaibleOptions.push(i)
    }

    document.querySelector(".option-container").innerHTML = '';

    let animationDelay = 0.15;
    // create options in html
    for(let i=0; i<optionLen; i++){
        

        // random option
        const optonIndex = avaibleOptions[Math.floor(Math.random() * avaibleOptions.length)];

        // get the position 'optonIndex' for avaibleOptions
        const index2 = avaibleOptions.indexOf(optonIndex);

        // remove the 'OptonIndex' from the avaibleOptions, so that the options does not repeat
        avaibleOptions.splice(index2,1);

        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = optonIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        document.querySelector(".option-container").appendChild(option)
        option.setAttribute("onclick", "getResult(this)");
    }
    questionCounter++ 
}

// get the result of current attemp question
function getResult(element){
    const id = parseInt(element.id);

    // get the answer by comparing the id of clicked option
    if( id === currentQuestion.answer){
        // set green color to the correct option
        element.classList.add("correct");

        // add to indicator to correct mark
        updateAnswerIndicator("correct");
        correctAnswers++;
        console.log("correctas: " + correctAnswers);
    }
    else{
        // set red color to the incorrect option
        element.classList.add("incorrect");

        // add to indicator to incorrect mark
        updateAnswerIndicator("incorrect");

        // if the answer is correct the show the correct option by adding  green color the correct option
        const optionLen = document.querySelector(".option-container").children.length;
        for(let i=0; i<optionLen; i++){
            if(parseInt(document.querySelector(".option-container").children[i].id) === currentQuestion.answer){
                document.querySelector(".option-container").children[i].classList.add("correct");
            }
        }

    }
    attempt++;
    unclickableOptions();
}

// make all the options unclickable once the user select a option (RESTRICT THE USER CHANGE THE OPTION AGAIN)
function unclickableOptions(){
    const optionLen = document.querySelector(".option-container").children.length;
    for(let i=0; i<optionLen; i++){
        document.querySelector(".option-container").children[i].classList.add("already-answered");
    }
}

function answerIndicator(){
    document.querySelector(".answers-indicator").innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        document.querySelector(".answers-indicator").appendChild(indicator);
    }
}
function updateAnswerIndicator(markType){
    document.querySelector(".answers-indicator").children[questionCounter-1].classList.add(markType)
}

function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over")
        quizOver();
    }
    else{
        getNewQuestion();
    }
}

function quizOver(){
    // hide quiz quiz Box
    document.querySelector(".quiz-box").classList.add("hide");

    // show de result box
    document.querySelector(".result-box").classList.remove("hide");
    quizResult();
}

// get the quiz result
function quizResult(){
    document.querySelector(".total-question").innerHTML = quiz.length;
    document.querySelector(".total-attempt").innerHTML = attempt;
    document.querySelector(".total-correct").innerHTML = correctAnswers;
    document.querySelector(".total-incorrect").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers/quiz.length)*100;
    document.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    document.querySelector(".total-score").innerHTML = correctAnswers + "/" + quiz.length;
}

// Star the quiz
function empezarQuiz(){
    //hide home box
    document.querySelector(".quiz-box").classList.remove("hide");

    //show quiz box
    document.querySelector(".home-box").classList.add("hide");

    // first we will  set all question in  avaible Questions Array
    setAvaibleQuestion();
    // second we will can call getnNewQuestion(); function
    getNewQuestion();

    // to create indicators of answer
    answerIndicator();
}

// Try again the quiz
function volverAJugar(){
    location.reload();
}

// print que quiz
function imprimir(){
    window.print();
}

