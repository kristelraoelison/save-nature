const questions = [
  {
    image: "images/baobab.jpg",
    question: "Quel type d'arbre est montré sur cette image?",
    answers: ["Banyan", "Manguier", "Pin", "baobab"],
    correct: 3,
  },
  {
    image: "images/lemur.png",
    question: "Quel est le nom de cet animal qui est originaire de Madagascar?",
    answers: ["koala", "Lémurien", "Panda", "Écureuil"],
    correct: 1,
  },
  {
    image: "images/Madagascar_map.jpg",
    question: "Où se trouve Madagascar?",
    answers: [
      "Océan Indien",
      "Océan Pacifique",
      "Océan Atlantique",
      "Océan Arctique",
    ],
    correct: 0,
  },
  {
    image: "images/animals.jpg",
    question: "Quel type de reptile se trouve couramment à Madagascar?",
    answers: ["Gecko", "Iguane", "Caméléon", "Cobra"],
    correct: 2,
  },
  {
    image: "images/tsingy.jpg",
    question:
      "Quel est le nom de cette formation rocheuse unique à Madagascar?",
    answers: ["Grand Canyon", "Tsingy", "Forêt de Pierre", "Rockies"],
    correct: 1,
  },
  {
    image: "images/fosa.jpg",
    question: "Quel est le nom de ce mammifère carnivore trouvé à Madagascar?",
    answers: ["Hyène", "Lion", "Tigre", "Fossa"],
    correct: 3,
  },
  {
    image: "images/vanilla.jpg",
    question:
      "Quelle épice précieuse Madagascar est-il le plus grand producteur?",
    answers: ["Vanille", "Cannelle", "Poivre", "Safran"],
    correct: 0,
  },
  {
    image: "images/Raphia.jpg",
    question: "Quel est le nom de ce palmier utilisé pour faire du raphia?",
    answers: [
      "Palmier Dattier",
      "Palmier à Coco",
      "Palmier à Raphia",
      "Palmier à Huile",
    ],
    correct: 2,
  },
  {
    image: "images/famandihana.jpg",
    question:
      "Quelle est la cérémonie traditionnelle malgache de l'exhumation des ancêtres?",
    answers: ["Sambatra", "Hira Gasy", "Famadihana", "Kabary"],
    correct: 2,
  },
  {
    image: "images/flags.jpg",
    question: "Quelles sont les couleurs du drapeau de Madagascar?",
    answers: [
      "Rouge, Vert, Blanc",
      "Bleu, Jaune, Vert",
      "Noir, Rouge, Jaune",
      "Blanc, Bleu, Rouge",
    ],
    correct: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timer;

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
  startTimer();
});

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-image").src = currentQuestion.image;
  document.getElementById("question-text").innerText = currentQuestion.question;

  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.classList.add("answer-button");
    button.innerText = answer;
    button.onclick = () => checkAnswer(index);
    answersContainer.appendChild(button);
  });
}

function checkAnswer(index) {
  const currentQuestion = questions[currentQuestionIndex];
  if (index === currentQuestion.correct) {
    score++;
    document.getElementById("feedback").innerText = "Correct!";
    document.getElementById("feedback").style.color = "#28a745";
  } else {
    document.getElementById("feedback").innerText = "Incorrect!";
    document.getElementById("feedback").style.color = "#dc3545";
  }
  document.getElementById("next-button").style.display = "block";
  document.querySelectorAll(".answer-button").forEach((button) => {
    button.disabled = true;
    if (button.innerText === currentQuestion.answers[currentQuestion.correct]) {
      button.style.backgroundColor = "#28a745";
    } else {
      button.style.backgroundColor = "#dc3545";
    }
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    document.getElementById("next-button").style.display = "none";
    document.getElementById("feedback").innerText = "";
  } else {
    clearInterval(timer);
    showFinalScore();
  }
}

function startTimer() {
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      showFinalScore();
    } else {
      document.getElementById("time").innerText = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

function showFinalScore() {
  document.getElementById("quiz-container").innerHTML = `
    <h2>Votre score est de ${score} sur ${questions.length}</h2>
    <button id="retry-button" onclick="retryQuiz()">Recommencer</button>
  `;
}

function retryQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60;
  document.getElementById("quiz-container").innerHTML = `
    <h1 id="quiz-title">Interactive Image Quiz</h1>
    <div id="timer">Time Left: <span id="time">60</span> seconds</div>
    <div id="question-container">
      <img id="question-image" src="" alt="Question Image" />
      <h1 id="question-text"></h1>
    </div>
    <div id="answers-container"></div>
    <div id="feedback"></div>
    <button id="next-button" onclick="nextQuestion()">Next</button>
  `;
  loadQuestion();
  startTimer();
}
