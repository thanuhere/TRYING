const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionrElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shufledQuestions, currentQuestionIndex;
let Quizscore=0;
function showQuestion(question){
    questionrElement.innerText=question.question;
    question.answers.forEach((answer) =>{
        const button=document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn'){
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElement.appendChild(button)
    })
}




function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement,firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}




function selectAnswer(e)
{
    const selectedButton=e.target
    const correct= selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button) => {
        setStatusClass(button, button.dataset.correct)
    }
    if(shufledQuestions.length> currentQuestionIndex +1){
        nextButton.classList.remove("hide")
    }    
    else{
        startButton.innerText="restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset= correct)
    {
        Quizscore++
    }
    document.getElementById('right=answers').innerText= Quizscore
}




function setStatusClass(element, correct)
{
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }
    else{
        element.classList.add("wrong")
    }
}



function clearStatusClass(element){
    element.classList.remove('correct')
    element.classlist.remove('wrong')
}


const Questions=[
    { 
        question: 'Which of the following is a javascript framework?';
        answers=[
            {text: 'Python', correct: false}
            {text: 'django', correct: false}
            {text: 'React', correct: true}
            {text: 'Python', correct: false}
        ]
    }
]