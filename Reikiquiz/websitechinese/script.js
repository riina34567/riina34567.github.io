const quizData = [
  {
    question: "什麼是靈氣？",
    a: "A 著名的日本料理",
    b: "B 日本的一座山的名稱",
    c: "C 生命之源",
    d: "D 一座日本寺廟",
    correct: "C",
    description:
      "靈氣是生命之源，是一個日文單字，意思是我們的身體、其他生物和物質中所蘊含的無形能量。所有的東西都含有靈氣，就像有能量頻率一樣",
  },
  {
    question: "什麼是臼井靈氣?",
    a: "A 人名",
    b: "B 治療名稱",
    c: "C 日本的地名",
    d: "D 日本貓的名字",
    correct: "B",
    description:
      "療法名稱：臼井靈氣 (Usui Reiki) 是一種能量治療療法，起源於約 100 年前的日本",
  },
  {
    question: "靈氣療法有什麼好處?",
    a: "A 睡眠品質好、心情平靜、情緒穩定",
    b: "B 生氣、亢奮",
    c: "C 情緒不穩定",
    d: "D 超能力",
    correct: "A",
    description:
      "靈氣療法透過改善我們的身體能量流動，幫助您更好地睡眠，穩定情緒並平靜您的身心",
  },
  {
    question: "能夠執行靈氣療法需要下列哪一項？",
    a: "A 不要喝酒",
    b: "B 透過瀑布的撞擊來淨化自己",
    c: "C 不要吃肉",
    d: "D 接受靈氣大師的靈授",
    correct: "B",
    description: "為了能夠自己進行靈氣療法，您需要接受靈氣大師的靈授",
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
