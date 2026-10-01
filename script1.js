/* ================= PASSWORD ================= */

const correctPassword = "luna";

function checkPassword() {

    const enteredPassword =
        document.getElementById("passwordInput").value;

    const error =
        document.getElementById("passwordError");

    if (enteredPassword === correctPassword) {

        document
            .getElementById("passwordScreen")
            .classList.add("hidden");

        document
            .getElementById("mainSite")
            .classList.remove("hidden");

    } else {

        error.textContent =
            "Hmm... that's not it 👀 Try again!";
    }
}


/* Allow Enter key */

document
    .getElementById("passwordInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            checkPassword();

        }

    });


/* ================= QUIZ ================= */

const questions = [

    {
        question: "When was our first kiss?",
        answers: [
            "26 October 2025",
            "26 September 2026",
            "26 September 2025",
            "20 September 2025"
        ],
        correct: 2
    },

    {
        question: "What food would I probably choose first?",
        answers: [
            "Pizza",
            "Burger",
            "Momos",
            "Pasta"
        ],
        correct: 2
    },

    {
        question: "What is something that always makes me happy?",
        answers: [
            "Music",
            "Bingo chips",
            "You",
            "All of the above"
        ],
        correct: 2
    },

    {
        question: "What would I choose for a perfect day?",
        answers: [
            "A quiet day at home",
            "Going somewhere together",
            "Sleeping all day",
            "Studying 😭"
        ],
        correct: 2
    }

];


let currentQuestion = 0;


/* ================= START QUIZ ================= */

function startQuiz() {

    document
        .querySelector(".secret-card")
        .classList.add("hidden");

    document
        .getElementById("quiz")
        .classList.remove("hidden");

    showQuestion();
}


/* ================= SHOW QUESTION ================= */

function showQuestion() {

    const question =
        questions[currentQuestion];

    document
        .getElementById("questionNumber")
        .textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    document
        .getElementById("questionText")
        .textContent =
        question.question;

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer");

        button.onclick =
            () => checkAnswer(index);

        answers.appendChild(button);

    });
}


/* ================= CHECK ANSWER ================= */

function checkAnswer(selected) {

    const question =
        questions[currentQuestion];

    const result =
        document.getElementById("quizResult");

    if (selected === question.correct) {

        result.textContent =
            "Correct! 💛";

        result.style.color =
            "#3c8c40";

        setTimeout(() => {

            currentQuestion++;

            result.textContent = "";

            if (currentQuestion < questions.length) {

                showQuestion();

            } else {

                unlockSecret();

            }

        }, 800);

    } else {

        result.textContent =
            "Nope 😭 Think harder... you know me!";

        result.style.color =
            "#c0392b";
    }
}


/* ================= UNLOCK ================= */

function unlockSecret() {

    document
        .getElementById("quiz")
        .classList.add("hidden");

    document
        .getElementById("lock")
        .textContent = "🔓";

    document
        .getElementById("secretMessage")
        .classList.remove("hidden");

}


/* ================= SCROLL ================= */

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}
