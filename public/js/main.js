//Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner 
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//Randomise the background of the quiz for each questiion
const activity_data = [
    {type: "movie", title: "Pulp Fiction", genre: "Crime, Drama", release_year: 1994},
    {type: "movie", title: "Saving Private Ryan", genre: "Drama, War", release_year: 1998},
    {type: "movie", title: "The Departed", genre: "Crime, Drama, Thriller", release_year: 2006},
    {type: "movie", title: "Heat", genre: "Action, Crime, Drama", release_year: 1995},
    {type: "movie", title: "The Silence of the Lambs", genre: "Crime, Drama, Thriller", release_year: 1991},
    {type: "movie", title: "No Country for Old Men", genre: "Crime, Drama, Thriller", release_year: 2007},
    {type: "movie", title: "Toy Story", genre: "Animation, Adventure, Comedy, Family, Fantasy", release_year: 1995},
    {type: "movie", title: "The Shawshank Redemption", genre: "Drama", release_year: 1994},
    {type: "movie", title: "Gangs of New York", genre: "Crime, Drama", release_year: 2002},
    {type: "movie", title: "The Lord of the Rings: The Two Towers", genre: "Action, Adventure, Drama, Fantasy", release_year: 2002},
    {type: "movie", title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Action, Adventure, Drama, Fantasy", release_year: 2001},
    {type: "movie", title: "Se7en", genre: "Crime, Drama, Mystery, Thriller", release_year: 1995},
    {type: "movie", title: "Happy Gilmore", genre: "Comedy, Sport", release_year: 1996},
    {type: "movie", title: "The Lord of the Rings: The Return of the King", genre: "Action, Adventure, Drama, Fantasy", release_year: 2003},
    {type: "movie", title: "Unbreakable", genre: "Drama, Mystery, Sci-Fi, Thriller", release_year: 2000},
    {type: "movie", title: "The Dark Knight", genre: "Action, Crime, Drama, Thriller", release_year: 2008},
    {type: "movie", title: "Road to Perdition", genre: "Crime, Drama, Thriller", release_year: 2002},
    {type: "movie", title: "The Hangover", genre: "Comedy", release_year: 2009},
    {type: "movie", title: "The Matrix", genre: "Action, Sci-Fi", release_year: 1999},
    {type: "movie", title: "Gladiator", genre: "Action, Adventure, Drama", release_year: 2000},
    {type: "movie", title: "Black Hawk Down", genre: "Action, Drama, History, War", release_year: 2001},
    {type: "movie", title: "Sling Blade", genre: "Drama", release_year: 1996},
    {type: "movie", title: "Kingpin", genre: "Comedy, Sport", release_year: 1996},
    {type: "movie", title: "Reservoir Dogs", genre: "Crime, Thriller", release_year: 1992},
    {type: "movie", title: "Zodiac", genre: "Crime, Drama, Mystery, Thriller", release_year: 2007},
    {type: "movie", title: "Mystic River", genre: "Crime, Drama, Mystery, Thriller", release_year: 2003},
    {type: "movie", title: "There's Something About Mary", genre: "Comedy, Romance", release_year: 1998},
    {type: "movie", title: "Jackie Brown", genre: "Crime, Drama, Thriller", release_year: 1997},
    {type: "movie", title: "Inception", genre: "Action, Adventure, Sci-Fi, Thriller", release_year: 2010},
    {type: "movie", title: "Ready to Rumble", genre: "Comedy, Sport", release_year: 2000},
    {type: "movie", title: "Munich", genre: "Action, Drama, History, Thriller", release_year: 2005},
    {type: "movie", title: "Fight Club", genre: "Drama", release_year: 1999},
    {type: "movie", title: "Forrest Gump", genre: "Drama, Romance", release_year: 1994},
    {type: "movie", title: "Ace Ventura: Pet Detective", genre: "Comedy", release_year: 1994},
    {type: "movie", title: "Tommy Boy", genre: "Adventure, Comedy", release_year: 1995},
    {type: "movie", title: "A Beautiful Mind", genre: "Biography, Drama", release_year: 2001},
    {type: "movie", title: "The Boondock Saints", genre: "Action, Thriller", release_year: 1999},
    {type: "movie", title: "One Hour Photo", genre: "Drama, Thriller", release_year: 2002},
    {type: "movie", title: "Catch Me If You Can", genre: "Biography, Crime, Drama", release_year: 2002},
    {type: "movie", title: "Mr. Brooks", genre: "Crime, Drama, Thriller", release_year: 2007},
    {type: "movie", title: "Shutter Island", genre: "Mystery, Thriller", release_year: 2010},
    {type: "movie", title: "Toy Story 2", genre: "Animation, Adventure, Comedy, Family, Fantasy", release_year: 1999},
    {type: "movie", title: "The Godfather", genre: "Crime, Drama", release_year: 1972},
    {type: "movie", title: "The Birdcage", genre: "Comedy", release_year: 1996},
    {type: "movie", title: "Big Fish", genre: "Adventure, Drama, Fantasy, Romance", release_year: 2003},
    {type: "movie", title: "Monsters, Inc.", genre: "Animation, Adventure, Comedy, Family, Fantasy", release_year: 2001},
    {type: "movie", title: "Heavyweights", genre: "Comedy, Drama, Family, Sport", release_year: 1995},
    {type: "movie", title: "300", genre: "Action, Drama", release_year: 2006},
    {type: "movie", title: "Dumb and Dumber", genre: "Comedy", release_year: 1994},
    {type: "movie", title: "American History X", genre: "Crime, Drama", release_year: 1998},
    {type: "movie", title:"Ballistic: Ecks vs. Sever", genre: "Action, Crime, Mystery, Sci-Fi, Thriller", release_year: 2002},
    {type: "movie", title:"Chaos", genre: "Horror, Thriller", release_year: 2005},
    {type: "movie", title:"House of the Dead", genre: "Action, Adventure, Horror", release_year: 2003},
    {type: "movie", title:"Alone in the Dark", genre: "Action, Horror, Sci-Fi", release_year: 2005},
    {type: "movie", title:"Transformers: Revenge of the Fallen", genre: "Action, Adventure, Sci-Fi", release_year: 2009},
    {type: "movie", title:"Leonard Part 6", genre: "Action, Comedy, Sci-Fi", release_year: 1987},
    {type: "movie", title:"Freddy Got Fingered", genre: "Comedy", release_year: 2001},
    {type: "movie", title:"Battlefield Earth", genre: "Action, Adventure, Sci-Fi", release_year: 2000},
    {type: "movie", title:"Glitter", genre: "Drama, Music, Romance", release_year: 2001},
    {type: "movie", title:"Resident Evil: Apocalypse", genre: "Action, Horror, Sci-Fi, Thriller", release_year: 2004},
    {type: "movie", title:"Catwoman", genre: "Action, Crime, Fantasy", release_year: 2004},
    {type: "movie", title:"The Skulls", genre: "Action, Crime, Drama, Thriller", release_year: 2000},
    {type: "movie", title:"Staying Alive", genre: "Drama, Music, Romance", release_year: 1983},
    {type: "movie", title:"That's My Boy", genre: "Comedy", release_year: 2012},
    {type: "movie", title:"Mr. Deeds", genre: "Comedy, Romance", release_year: 2002},
    {type: "movie", title:"Eegah", genre: "Adventure, Comedy, Fantasy, Horror, Music", release_year: 1962},
    {type: "movie", title:"Track of the Moon Beast", genre: "Horror, Sci-Fi", release_year: 1976},
    {type: "movie", title:"The Beast of Yucca Flats", genre: "Horror, Sci-Fi", release_year: 1961},
    {type: "movie", title:"The Creeping Terror", genre: "Horror, Sci-Fi", release_year: 1964},
    {type: "movie", title:"Troll 2", genre: "Comedy, Fantasy, Horror", release_year: 1990},
    {type: "movie", title:"Showgirls", genre: "Drama", release_year: 1995},
    {type: "movie", title:"Baby Geniuses", genre: "Comedy, Crime, Family, Sci-Fi", release_year: 1999},
    {type: "movie", title:"Spice World", genre: "Comedy, Family, Music", release_year: 1997},
    {type: "movie", title:"Maximum Overdrive", genre: "Action, Comedy, Horror, Sci-Fi", release_year: 1986},
    {type: "movie", title:"After Earth", genre: "Action, Adventure, Sci-Fi", release_year: 2013},
    {type: "game", title: "The Last of Us", genre: "Action, Adventure, Drama, Horror, Sci-Fi, Thriller", release_year: 2013},
    {type: "game", title: "Red Dead Redemption II", genre: "Action, Adventure, Crime, Drama, Western", release_year: 2018},
    {type: "game", title: "Wiedzmin 3: Dziki Gon", genre: "Action, Adventure, Drama, Fantasy, Mystery, Romance", release_year: 2015},
    {type: "game", title: "God of War", genre: "Action, Adventure, Drama, Fantasy", release_year: 2018},
    {type: "game", title: "Metal Gear Solid", genre: "Action, Adventure, Drama, Mystery, Sci-Fi, Thriller", release_year: 1998},
    {type: "game", title: "Zeruda no densetsu: Toki no okarina", genre: "Action, Adventure, Fantasy", release_year: 1998},
    {type: "game", title: "Grand Theft Auto V", genre: "Action, Crime, Drama", release_year: 2013},
    {type: "game", title: "Uncharted 4: A Thief's End", genre: "Action, Adventure, Drama, Thriller", release_year: 2016},
    {type: "game", title: "Mass Effect 2", genre: "Action, Adventure, Drama, Sci-Fi", release_year: 2010},
    {type: "game", title: "Fainaru fantajî VII", genre: "Action, Adventure, Fantasy, Sci-Fi", release_year: 1997},
    {type: "game", title: "Star Wars: Knights of the Old Republic", genre: "Action, Adventure, Fantasy, Mystery, Romance, Sci-Fi", release_year: 2003},
    {type: "game", title: "Chrono Trigger", genre: "Action, Adventure, Fantasy, Mystery, Sci-Fi", release_year: 1995},
    {type: "game", title: "Metal Gear Solid 3: Subsistence", genre: "Action, Adventure, Drama, Mystery, Sci-Fi, Thriller", release_year: 2005},
    {type: "game", title: "Grand Theft Auto: San Andreas", genre: "Action, Crime", release_year: 2004},
    {type: "game", title: "Batman: Arkham City", genre: "Action, Adventure, Crime, Mystery, Sci-Fi, Thriller", release_year: 2011},
    {type: "game", title: "The Elder Scrolls V: Skyrim", genre: "Action, Adventure, Fantasy", release_year: 2011},
    {type: "game", title: "Uncharted 2: Among Thieves", genre: "Action, Adventure, Fantasy, Horror, Mystery, Thriller", release_year: 2009},
    {type: "game", title: "Red Dead Redemption", genre: "Action, Adventure, Crime, Drama, Western", release_year: 2010},
    {type: "game", title: "Half-Life 2", genre: "Action, Adventure, Sci-Fi, Thriller", release_year: 2004},
    {type: "game", title: "Portal 2", genre: "Adventure, Comedy, Sci-Fi, Thriller", release_year: 2011},
    {type: "game", title: "Metal Gear Solid 4: Guns of the Patriots", genre: "Action, Adventure, Drama, Mystery, Sci-Fi, Thriller, War", release_year: 2008},
    {type: "game", title: "Silent Hill 2", genre: "Drama, Horror, Mystery, Romance, Thriller", release_year: 2001},
    {type: "game", title: "Zeruda no densetsu: Buresu obu za wairudo", genre: "Action, Adventure, Fantasy, Sci-Fi", release_year: 2017},
    {type: "game", title: "Fallout 2: A Post-Nuclear Role-Playing Game", genre: "Action, Adventure, Sci-Fi", release_year: 1998},
    {type: "game", title: "Forgotten Realms: Baldur's Gate II - Shadows of Amn", genre: "Action, Adventure, Fantasy", release_year: 2000},
    {type: "game", title: "Planescape: Torment", genre: "Adventure, Drama, Fantasy, Mystery", release_year: 1999},
    {type: "game", title: "Kingdom Hearts II", genre: "Action, Adventure, Family, Fantasy", release_year: 2005},
    {type: "game", title: "Super Mario World", genre: "Action, Adventure, Family, Fantasy", release_year: 1990},
    {type: "game", title: "Wanda to kyozô", genre: "Action, Adventure, Drama, Fantasy", release_year: 2005},
    {type: "game", title: "Zeruda no densetsu: Kamigami no toraifôsu", genre: "Action, Adventure, Fantasy", release_year: 1991},
    {type: "game", title: "The Secret of Monkey Island", genre: "Adventure, Comedy, Fantasy", release_year: 1990},
    {type: "game", title: "Monkey Island 2: LeChuck's Revenge", genre: "Adventure, Comedy, Fantasy", release_year: 1991},
    {type: "game", title: "Persona 5", genre: "Action, Adventure, Fantasy", release_year: 2016},
    {type: "game", title: "Batman: Arkham Asylum", genre: "Action, Adventure, Crime, Sci-Fi, Thriller", release_year: 2009},
    {type: "game", title: "Grand Theft Auto: Vice City", genre: "Action, Crime, Drama", release_year: 2002},
    {type: "game", title: "Mass Effect", genre: "Action, Adventure, Drama, Sci-Fi", release_year: 2007},
    {type: "game", title: "Spider-Man", genre: "Action, Adventure, Fantasy, Sci-Fi", release_year: 2018},
    {type: "game", title: "Max Payne", genre: "Action, Crime, Drama, Mystery, Thriller", release_year: 2001},
    {type: "game", title: "Detroit: Become Human", genre: "Action, Adventure, Drama, Mystery, Sci-Fi, Thriller", release_year: 2018},
    {type: "game", title: "Biohazard 4", genre: "Action, Adventure, Fantasy, Horror, Sci-Fi, Western", release_year: 2005},
    {type: "game", title: "The Walking Dead: The Game - Season 1", genre: "Drama, Horror, Sci-Fi, Thriller", release_year: 2012},
    {type: "game", title: "Half-Life", genre: "Action, Sci-Fi, Thriller", release_year: 1998},
    {type: "game", title: "God of War II", genre: "Action, Adventure, Fantasy, History", release_year: 2007},
    {type: "game", title: "Kingdom Hearts", genre: "Action, Adventure, Family, Fantasy", release_year: 2002},
    {type: "game", title: "Mafia: The City of Lost Heaven", genre: "Action, Crime, Drama", release_year: 2002},
    {type: "game", title: "Super Mario Bros. 3", genre: "Action, Adventure, Family, Fantasy", release_year: 1988},
    {type: "game", title: "Bloodborne", genre: "Action, Adventure, Fantasy, Horror, Sci-Fi", release_year: 2015},
    {type: "game", title: "Fallout: A Post-Nuclear Role-Playing Game", genre: "Action, Adventure, Sci-Fi", release_year: 1997},
    {type: "game", title: "Grim Fandango", genre: "Adventure, Comedy, Crime, Fantasy, Mystery", release_year: 1998},
    {type: "game", title: "Deus Ex", genre: "Action, Adventure, Drama, Mystery, Sci-Fi, Thriller", release_year: 2000},
    {type: "game", title: "BioShock Infinite", genre: "Action, Adventure, Drama, Horror, Mystery, Sci-Fi, Thriller", release_year: 2013},
    {type: "game", title: "The Curse of Monkey Island", genre: "Adventure, Comedy, Fantasy", release_year: 1997},
    {type: "game", title: "Final Fantasy VII Remake", genre: "Action, Adventure, Fantasy, Sci-Fi", release_year: 2020},
    {type: "game", title: "Vampire: The Masquerade - Bloodlines", genre: "Action, Drama, Fantasy, Horror, Mystery, Thriller", release_year: 2004},
    {type: "game", title: "Assassin's Creed II", genre: "Action, Adventure, Sci-Fi", release_year: 2009},
    {type: "game", title: "Fallout 3", genre: "Action, Adventure, Sci-Fi", release_year: 2008},
    {type: "game", title: "BioShock", genre: "Action, Adventure, Horror, Mystery, Sci-Fi, Thriller", release_year: 2007},
    {type: "game", title: "Mass Effect 3", genre: "Action, Adventure, Sci-Fi", release_year: 2012},
    {type: "game", title: "Portal", genre: "Adventure, Comedy, Sci-Fi, Thriller", release_year: 2007},
    {type: "game", title: "Max Payne 2: The Fall of Max Payne", genre: "Action, Crime, Drama, Mystery, Thriller", release_year: 2003},
    {type: "game", title: "Horizon Zero Dawn", genre: "Action, Adventure, Mystery, Sci-Fi", release_year: 2017},
    {type: "game", title: "God of War", genre: "Action, Adventure, Fantasy, History", release_year: 2005},
    {type: "game", title: "God of War III", genre: "Action, Adventure, Fantasy, History", release_year: 2010},
    {type: "game", title: "Dragon Age: Origins", genre: "Action, Adventure, Fantasy", release_year: 2009},
    {type: "game", title: "Fainaru fantajî X", genre: "Adventure, Fantasy, Romance, Sci-Fi", release_year: 2001},
    {type: "game", title: "Biohazard 2", genre: "Action, Horror, Sci-Fi, Thriller", release_year: 1998},
    {type: "game", title: "GoldenEye 007", genre: "Action, Adventure, Thriller", release_year: 1997},
    {type: "game", title: "Silent Hill", genre: "Drama, Horror, Mystery, Thriller", release_year: 1999},
    {type: "game", title: "Super Mario 64", genre: "Action, Adventure, Comedy, Family, Fantasy", release_year: 1996},
    {type: "game", title: "StarCraft", genre: "Action, Adventure, Sci-Fi, War", release_year: 1998},
    {type: "game", title: "Resident Evil 2", genre: "Action, Horror, Sci-Fi, Thriller", release_year: 2019},
    {type: "game", title: "Dark Souls", genre: "Action, Adventure, Fantasy, Horror", release_year: 2011},
    {type: "game", title: "Biohazard", genre: "Action, Horror, Mystery, Sci-Fi, Thriller", release_year: 2002},
    {type: "game", title: "Zeruda no densetsu: Mujura no kamen", genre: "Action, Adventure, Family, Fantasy", release_year: 2000},
    {type: "game", title: "Dark Souls III", genre: "Action, Adventure, Fantasy, Horror", release_year: 2016},
    {type: "game", title: "Dai-Rantô Smash Brothers Deluxe", genre: "Action, Fantasy, Sci-Fi, Sport", release_year: 2001},
    {type: "game", title: "Super Metroid", genre: "Action, Adventure, Mystery, Sci-Fi, Thriller", release_year: 1994},
    {type: "game", title: "Call of Duty 4: Modern Warfare", genre: "Action, Thriller", release_year: 2007},
    {type: "game", title: "Batman: Arkham Knight", genre: "Action, Adventure, Crime, Mystery, Sci-Fi, Thriller", release_year: 2015},
    {type: "game", title: "Uncharted 3: Drake's Deception", genre: "Action, Adventure, Fantasy, Horror, Mystery, Thriller", release_year: 2011},
    {type: "game", title: "Zeruda no densetsu Towairaito purinsesu", genre: "Action, Adventure, Fantasy", release_year: 2006},
    {type: "game", title: "Super Mario Galaxy", genre: "Action, Adventure, Family, Fantasy, Sci-Fi", release_year: 2007},
    {type: "game", title: "Diablo II", genre: "Action, Adventure, Fantasy, Horror", release_year: 2000},
    {type: "game", title: "Zeruda no densetsu: Kaze no takuto", genre: "Action, Adventure, Fantasy", release_year: 2002},
    {type: "game", title: "Super Mario Odyssey", genre: "Animation, Action, Adventure, Family, Fantasy", release_year: 2017},
    {type: "game", title: "Final Fantasy VI", genre: "Action, Adventure, Fantasy, Sci-Fi", release_year: 1994},
    {type: "game", title: "Metal Gear Solid 2: Substance", genre: "Action, Adventure, Drama, Mystery, Sci-Fi, Thriller", release_year: 2002},
    {type: "game", title: "Baldur's Gate", genre: "Action, Adventure, Fantasy, Mystery", release_year: 1998},
    {type: "game", title: "Day of the Tentacle", genre: "Adventure, Comedy, Sci-Fi", release_year: 1993},
    {type: "game", title: "Grand Theft Auto IV", genre: "Action, Crime, Drama", release_year: 2008},
    {type: "game", title: "Far Cry 3", genre: "Action, Adventure", release_year: 2012},
    {type: "game", title: "Life Is Strange", genre: "Drama, Mystery, Sci-Fi", release_year: 2015},
    {type: "game", title: "The Elder Scrolls IV: Oblivion", genre: "Action, Adventure, Fantasy", release_year: 2006},
    {type: "game", title: "The Wolf Among Us", genre: "Action, Crime, Drama, Fantasy, Mystery, Thriller", release_year: 2013},
    {type: "game", title: "Death Stranding", genre: "Action, Adventure, Drama, Fantasy, Horror, Mystery, Sci-Fi, Thriller", release_year: 2019},
    {type: "game", title: "Tales from the Borderlands: A Telltale Games Series", genre: "Adventure, Comedy, Sci-Fi", release_year: 2014},
    {type: "game", title: "Warcraft III: Reign of Chaos", genre: "Action, Adventure, Fantasy", release_year: 2002},
    {type: "game", title: "Super Mario Bros.", genre: "Action, Adventure, Fantasy", release_year: 1985},
    {type: "game", title: "Wiedzmin 2: Zabójcy królów", genre: "Action, Adventure, Drama, Fantasy, Mystery", release_year: 2011},
    {type: "game", title: "Star Wars: Knights of the Old Republic II - The Sith Lords", genre: "Action, Adventure, Drama, Fantasy, Mystery, Sci-Fi", release_year: 2004},
   ]
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
const results = document.querySelector('.results');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = question.answer1Total;
    const option2Total = question.answer2Total;
    const option3Total = question.answer3Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`;
    option2.innerHTML = `${question.answer2}`;
    option3.innerHTML = `${question.answer3}`;
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
        showResults();
        result.innerHTML =
        //  `<h1 class="final-score">Your score: ${totalScore}</h1>
        //  <div class="summary">
        //     <h1>Summary</h1>
        //     <p>Possible - Personality Traits, see below for a summary based on your results:</p>
        //     <p>15 - 21- You should watch a movie</p>
        //     <p>10 - 15 - You should play a game</p>
        //     <p>5 - 10 - You should read a book</p>
        //     <p>5 - You should do all three</p>
        // </div>
        `<button class="restart">Restart Quiz</button>
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
let randomChoice = activity_data[Math.floor(Math.random()*activity_data.length)];

function showResults(){
    let randomChoice = Math.floor(Math.random()*activity_data.length);
    if(activity_data[randomChoice].type === 'game'){
        results.innerHTML=`You should play ${activity_data[randomChoice].title}`
    }else{
        results.innerHTML=`You should watch ${activity_data[randomChoice].title}`
    }
}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
result.addEventListener('click',restartQuiz);


console.log('JS CONNECTED _______________________')

