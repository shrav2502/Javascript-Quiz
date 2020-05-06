const start = document.getElementById("start");
const questions = document.getElementById("questions");
const next = document.getElementById("next");
const results = document.getElementById("results");
const quizText = document.getElementById("quiz");
const restart = document.getElementById("restart");
let currentQuestion = 0;
let correct = 0;
start.addEventListener("click", startButton);

function startButton() {
  start.classList.add("hide");
  quizText.classList.add("hide");
  questions.classList.remove("hide");
  showQuestions();
}

function showQuestions() {
  next.classList.remove("hide");
  questions.innerHTML = quiz[currentQuestion].question;
  questions.innerHTML += "<br><br>";
  addingRadioButton();
}

function addingRadioButton() {
  let answersChoice = quiz[currentQuestion].answer;
  let correctAns = quiz[currentQuestion].correctAnswer;
  let uniqueName = quiz[currentQuestion].unique;
  answersChoice.forEach((element) => {
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.value = element;
    input.name = "unique";
    input.id = element;
    input.style.transform = "scale(1.8)";
    input.style.marginRight = "15px";
    const label = document.createElement("label");
    label.setAttribute("for", element);
    label.append(input);
    label.append(element);
    questions.appendChild(label);
    questions.innerHTML += "<br><br>";
  });
}

next.addEventListener("click", nextQuestions);

function nextQuestions() {
  if (currentQuestion == 10) {
    next.classList.add("hide");
    results.classList.remove("hide");
  } else {
    let correctAns = quiz[currentQuestion].correctAnswer;
    let value = document.getElementsByName("uniqueName");
    value.forEach((e) => {
      if (e.checked) {
        let ans = correctAns.localeCompare(e.value);
        if (ans == 0) {
          correct++;
          console.log(correct);
        }
      }
    });
    currentQuestion++;
    showQuestions();
  }
}

results.addEventListener("click", function () {
  questions.innerHTML = "Your score is: " + correct + " / 10";
  questions.style.fontWeight = "900";
  restart.classList.remove("hide");
  results.classList.add("hide");
});

restart.addEventListener("click", function () {
  currentQuestion = 0;
  start.classList.remove("hide");
  questions.style.color = "black";
  questions.style.fontWeight = "300";
  results.classList.add("hide");
  restart.classList.add("hide");
});

let quiz = [
  {
    question: "1) Which is the largest continent?",
    answer: ["Asia", "Africa", "Europe", "North America"],
    correctAnswer: "Asia",
  },
  {
    question: "2) Which is the richest country in the world?",
    answer: ["US", "India", "Qatar", "Australia"],
    correctAnswer: "Qatar",
  },
  {
    question: "3) Which is the national bird of India?",
    answer: ["Pigeon", "Peacock", "Sparrow", "Crow"],
    correctAnswer: "Peacock",
  },
  {
    question: "4) Which crop is sown on the largest area in India?",
    answer: ["Rice", "Wheat", "Sugarcane", "Maize"],
    correctAnswer: "Rice",
  },
  {
    question: "5) which is the national animal of India?",
    answer: ["Lion", "Tiger", "Elephant", "Giraffe"],
    correctAnswer: "Tiger",
  },
  {
    question: "6) Fastest shorthand writer was?",
    answer: ["Dr.G.D.Bist", "J.R.D.Tata", "J.M.Tagore", "Khudada Khan"],
    correctAnswer: "Dr.G.D.Bist",
  },
  {
    question: "7) Golf player Vijay Singh belongs to which country?",
    answer: ["USA", "Fiji", "India", "UK"],
    correctAnswer: "Fiji",
  },
  {
    question: "8) First Afghan war took place in?",
    answer: ["1839", "1843", "1833", "1848"],
    correctAnswer: "1839",
  },
  {
    question:
      "9) Federation Cup, World Cup, Allywyn International Trophy and Challenge Cup are awarded to winners of?",
    answer: ["Tennis", "Volleyball", "Basketball", "Cricket"],
    correctAnswer: "Volleyball",
  },
  {
    question: "10) Gravity setting chambers are used in industries to remove?",
    answer: ["SOx", "NOx", "CO", "Suspended particulate matter"],
    correctAnswer: "Suspended particulate matter",
  },
];
