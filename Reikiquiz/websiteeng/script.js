const quizData = [
  {
    question: "What is Reiki?",
    a: "Famous Japanese Food",
    b: "Name of the mountain in Japan",
    c: "source of vitality",
    d: "A japanese temple",
    correct: "c",
    description:
      "Source of vitality, Reiki is a japanese word which means invisible energy that is contained in our body, other living creatures and materials. All the things contain Reiki like having the energy frequency.",
  },
  {
    question: "What is Usui Reiki?",
    a: "Name of person",
    b: "Name of therapy",
    c: "Name of place in Japan",
    d: "Name of cat in Japan",
    correct: "b",
    description:
      "Name of therapy, Usui Reiki is an energy healing therapy which originated in japan about 100 years ago.",
  },
  {
    question: "What's the benefit of Reiki therapy?",
    a: "Sleep better, being calm, emotional stabilities",
    b: "Being angry, being hyper",
    c: "Emotional instabilities",
    d: "superpowers",
    correct: "a",
    description:
      "Reiki therapy helps you to sleep better, emotionally stabilizes and calms your body and mind through improving your body energy flow. ",
  },
  {
    question: "Where does Reiki energy come from?",
    a: "Moon",
    b: "Space",
    c: "Mars",
    d: "Tokyo",
    correct: "b",
    description:
      "Reiki energy comes from space/universe, because we assume that the universe is a big existence which influences our daily life, we can find those influences like weather and seasons.",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const popup = document.getElementById("popup");
const popupDescription = document.getElementById("popup-description");
const nextBtn = document.getElementById("next");
const closeBtn = document.querySelector(".close");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function showPopup(description) {
  popupDescription.innerText = description;
  popup.style.display = "flex";
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    const currentQuizData = quizData[currentQuiz];
    if (answer === currentQuizData.correct) {
      score++;
      showPopup(currentQuizData.description);
    } else {
      showPopup(
        `Wrong answer. The correct answer is ${currentQuizData.correct.toUpperCase()}. ${
          currentQuizData.description
        }`
      );
    }
  }
});

nextBtn.addEventListener("click", () => {
  popup.style.display = "none";
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

const nextButton = document.getElementById("next");

const backgrounds = [
  'url("back1.gif")',
  'url("b2.gif")',
  'url("b3.gif")',
  'url("b4.gif")',
];

let currentBackgroundIndex = 0;

nextButton.addEventListener("click", () => {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
});
