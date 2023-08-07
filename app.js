
<!DOCTYPE html>
<html>
<head>
    <title>Puzzle Game</title>
</head>
<body>
    <h1>Welcome to the Puzzle Game!</h1>
    <div id="question"></div>
    <input type="text" id="answerInput" />
    <button onclick="checkAnswer()">Submit Answer</button>
    <button onclick="getHint()">Get Hint</button>

    <script>
        let currentQuestionIndex = 0;
        let questions = [
            { question: "What is the capital of France?", answer: "paris" },
            { question: "Which planet is known as the Red Planet?", answer: "mars" },
            { question: "What is 2 + 2?", answer: "4" },
            { question: "Which mammal can fly?", answer: "bat" },
            { question: "What is the chemical symbol for water?", answer: "h2o" }
        ];

        function displayQuestion() {
            document.getElementById("question").innerText = questions[currentQuestionIndex].question;
        }

        function checkAnswer() {
            const userAnswer = document.getElementById("answerInput").value.toLowerCase();
            const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

            if (userAnswer === correctAnswer) {
                alert("Correct! You've solved the puzzle.");
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    displayQuestion();
                } else {
                    alert("Congratulations! You've completed all the puzzles.");
                }
            } else {
                alert("Wrong answer! Game over.");
            }

            // Clear the input field after checking the answer
            document.getElementById("answerInput").value = "";
        }

        function getHint() {
            const answer = questions[currentQuestionIndex].answer;
            const hint = answer.charAt(0).toLowerCase();
            alert("Hint: The first letter of the answer is '" + hint + "'.");
        }

        // Initialize the game by displaying the first question
        displayQuestion();
    </script>
</body>
</html>
