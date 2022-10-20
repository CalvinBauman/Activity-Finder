//Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner 
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//Randomise the background of the quiz for each questiion

const questions = [
    {
      id: "1",
      question: "Please provide your age range.",
      answer1: "under 18",
      answer1Total: "1",
      answer2: "18 - 30",
      answer2Total: "2",
      answer3: "over 30",
      answer3Total: "3"
    },
    {
      id: "2",
      question: "How much free time do you have tonight?",
      answer: "less than 2 hours",
      answer1Total: "1",
      answer2: "2-5 hours",
      answer2Total: "2",
      answer3: "I am unemployed with nothing to do",
      answer3Total: "3"
    },
    {
      id: "3",
      question: "Do you want to watch a movie, play a game, or read a book?",
      answer1: "Watch a movie",
      answer1Total: "1",
      answer2: "Play a game",
      answer2Total: "3",
      answer3: "Read a book",
      answer3Total: "2"
    },
    {
      id: "4",
      question: "What genre seems most interesting to you?",
      answer1: "Action and Adventure",
      answer1Total: "3",
      answer2: "Romance",
      answer2Total: "2",
      answer3: "Horror",
      answer3Total: "1"
    },
    {
      id: "5",
      question: "Are you alone for this activity?",
      answer1: "Yes and I plan to stay alone",
      answer1Total: "1",
      answer2: "No I have company tonight!",
      answer2Total: "2",
      answer3: "Undecided",
      answer3Total: "3"
    },
    {
      id: "6",
      question: "Do you want to start an activity that will take up your time on future nights?",
      answer1: "No I want to clear my mind and do something just for tonight",
      answer1Total: "3",
      answer2: "I want to start something that I can continue in the near future",
      answer2Total: "2",
      answer3: "I want to do something that will take up the majority of my time",
      answer3Total: "1"
    },
    {
      id: "7",
      question: "Do you prioritize storytelling, visuals, or music?",
      answer1: "Storytelling",
      answer1Total: "1",
      answer2: "Visuals",
      answer2Total: "2",
      answer3: "Music",
      answer3Total: "3"
    }
  ]

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    
    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p>Possible - Personality Traits, see below for a summary based on your results:</p>
            <p>15 - 21- You should watch a movie</p>
            <p>10 - 15 - You should play a game</p>
            <p>5 - 10 - You should read a book</p>
            <p>5 - You should do all three</p>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);


