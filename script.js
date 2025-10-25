var introvertScore = 0;
var extrovertScore = 0;
var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var result = document.getElementById("result");
var restartButton = document.getElementById("restart");

// Event listeners for answer buttons
q1a1.addEventListener("click", introvert);
q1a2.addEventListener("click", extrovert);
q2a1.addEventListener("click", introvert);
q2a2.addEventListener("click", extrovert);
q3a1.addEventListener("click", introvert);
q3a2.addEventListener("click", extrovert);
restartButton.addEventListener("click", restartQuiz);

// Function when choosing introvert
function introvert() {
  introvertScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " introvertScore = " + introvertScore); 
  if (questionCount === 3) {
    console.log("This quiz is done!");
    updateResult();
  }   
}

// Function when choosing extrovert
function extrovert() {
  extrovertScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " extrovertScore = " + extrovertScore);
  if (questionCount === 3) {
    console.log("This quiz is done!");
    updateResult();
  }   
}                                                                

// Function to update result based on scores
function updateResult() {
  if (introvertScore >= 2) {
    result.innerHTML = "You are an introvert!";
    console.log("You are an introvert!");
  } else if (extrovertScore >= 2) {
    result.innerHTML = "You are an extrovert!";
    console.log("You are an extrovert!");
  }

  // Hide all questions
  var questions = document.querySelectorAll(".question");
  questions.forEach(function(question) {
    question.style.display = "none";
  });
  
  // Hide all question titles (h2 elements except result)
  var questionTitles = document.querySelectorAll("main h2:not(#result)");
  questionTitles.forEach(function(title) {
    title.style.display = "none";
  });

  // Show restart button
  restartButton.style.display = "block";
}

// Function to restart quiz
function restartQuiz() {
  introvertScore = 0;
  extrovertScore = 0;
  questionCount = 0;

  result.innerHTML = "Your result is...";  // Reset result display
  console.log("Quiz restarted!");

  // Show all questions again
  var questions = document.querySelectorAll(".question");
  questions.forEach(function(question) {
    question.style.display = "flex";
  });
  
  // Show all question titles again
  var questionTitles = document.querySelectorAll("main h2:not(#result)");
  questionTitles.forEach(function(title) {
    title.style.display = "block";
  });

  // Hide restart button again
  restartButton.style.display = "none";
}

// Hide restart button initially
restartButton.style.display = "none";