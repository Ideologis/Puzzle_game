const users = document.querySelector("input");
const nextQuestion = document.querySelector(".submit");
const hintBtn = document.querySelector(".hint");
const Puzzle = document.getElementById("puzzle");
const failed = document.querySelector(".failed");
const kont = document.querySelector(".continue");
const move2 = document.querySelector(".MoveToNext");
const success = document.querySelector(".modal");
const modal = document.querySelector(".congrats");

let questions = [
  {
    question:
      '"What built-in function is used to convert a string to lowercase in JavaScript?"',
    answer: "Lower",
  },
  {
    question:
      '"What operator is used to compare two values for equality in JavaScript?"',
    answer: "Equal",
  },
  {
    question: '"What operator is used to perform integer division in Python?"',
    answer: "Floor",
  },
  {
    question: '"What method is used to remove an element from a list in Python?"',
    answer: "Python",
  },
  {
    question:
      '"What built-in function is used to convert a string to an integer in JavaScript"',
    answer: "Parse",
  },
];

let currentQuestion = 0;

function displayQuestion() {
  Puzzle.innerHTML = questions[currentQuestion].question;
}
displayQuestion();
let secretWord = questions[currentQuestion].answer.toLowerCase().split("");
let Done = false;

function userTrack() {
  let userWord = users.value.toLowerCase().split("");
  let found = true; // Variable to track if the secret word is found
  if (userWord.some((character) => /\d/.test(character))) {
    alert("Please enter alphabetic characters only.");
  } else {
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] !== userWord[i]) {
        found = false; // Set found to false if a mismatch is found
        
        if (userWord[i] === undefined) {
          failed.classList.remove("movs"); // Add the class only if there is a mismatch
        } else {
          failed.classList.add("movs"); // Remove the class if there are no mismatches
        }
        console.log(`The wrong word is ${userWord[i]}`);
        break; // Exit the loop since the word is not found
      }
    }
    if (found) {
      currentQuestion++;
      console.log("Found secret word");
      Done = true;
      success.classList.add("movs");
      // alert("Correct! You've solved the puzzle.");
    } else {
      console.log("Not found");
    }
  }
}
// next button
function NextButton() {
  if (currentQuestion < questions.length) {
    // Display the next question
    secretWord = questions[currentQuestion].answer.toLowerCase().split("");
    console.log(secretWord);
    users.value = "";
    hintShown = false; // Initialize a flag to track if the hint has been shown
    displayQuestion();
    
  } else {
    modal.classList.remove("show")
    modal.classList.add("anime");
    // alert("Youve completed all the questions");
  }

  if (!Done) {
    alert("Please select ur answer");
  }
}

// Game
users.addEventListener("keyup", userTrack);

// submit
nextQuestion.addEventListener("click", NextButton);

//continue
move2.addEventListener("click", function () {
  failed.classList.remove("movs"); // Remove the class first
  console.log("why");
});

kont.addEventListener("click", function () {
  success.classList.remove("movs"); // Remove the class first
  console.log('why');
});
//Get Hint
let hintShown = false; // Initialize a flag to track if the hint has been shown

function getHint() {
  if (!hintShown) {
    const answer = questions[currentQuestion].answer;
    const hint = answer.charAt(0).toLowerCase();
    users.value = hint; // Set the input field's value to the hint
    hintShown = true; // Update the flag
  }
}
hintBtn.addEventListener("click", getHint);
  // congratulations
 
    const btnCloseModal = document.querySelector(".close-congrats");
    const closeModal = function () {
      modal.classList.add("hidden");
    };
    btnCloseModal.addEventListener("click", closeModal);
