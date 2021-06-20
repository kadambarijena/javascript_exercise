const quizData = [
  {
    question: 'What is the first letter of computer?',
    a: 'U',
    b: 'C',
    c: 'S',
    d: 'R',
    correct: 'b'
  }, {
    question: 'How can you catch a computer virus?',
    a: 'Sending e-mail messages',
    b: 'Using a laptop during the winter',
    c: 'Opening e-mail attachments',
    d: 'Shopping on-line',
    correct: 'c'
  }, {
    question: 'Google (www.google.com) is a ?',
    a: 'Search Engine',
    b: 'url',
    c: 'Directory of images',
    d: 'Chat service on the web',
    correct: "a"

  }, {
    question: 'Which is not an Internet protocol?',
    a: 'HTTP',
    b: 'FTP',
    c: 'STP',
    d: 'IP',
    correct: "c"
  }
];

const questionE1 = document.getElementById("question");
const option_1 = document.getElementById("option_1");
const option_2 = document.getElementById("option_2");
const option_3 = document.getElementById("option_3");
const option_4 = document.getElementById("option_4");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;


loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  option_1.innerText = currentQuizData.a;
  option_2.innerText = currentQuizData.b;
  option_3.innerText = currentQuizData.c;
  option_4.innerText = currentQuizData.d;
}

  submitBtn.addEventListener("click", () => {
  currentQuiz++;

  loadQuiz();

  });