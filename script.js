document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ການສຶກສາໃນໂຮງຮຽນ (Formal Education) ໝາຍເຖິງຫຍັງ?",
            options: [
                "ການຮຽນຮູ້ແບບບໍ່ມີໂຄງສ້າງ ແລະ ຫຼັກສູດ",
                "ຂະບວນການຮຽນຮູ້ທີ່ຈັດຕັ້ງຂຶ້ນຢ່າງເປັນລະບົບ ແລະ ມີຫຼັກສູດຊັດເຈນ",
                "ການຝຶກອົບຮົມໄລຍະສັ້ນເພື່ອເພີ່ມທັກສະສະເພາະ",
                "ການຮຽນຮູ້ຜ່ານປະສົບການໃນຊີວິດປະຈຳວັນ"
            ],
            answer: "ຂະບວນການຮຽນຮູ້ທີ່ຈັດຕັ້ງຂຶ້ນຢ່າງເປັນລະບົບ ແລະ ມີຫຼັກສູດຊັດເຈນ",
            explanation: "ການສຶກສາໃນໂຮງຮຽນແມ່ນມີໂຄງສ້າງ, ລະບົບ, ແລະ ຫຼັກສູດທີ່ກຳນົດໄວ້."
        },
        {
            question: "ຂໍ້ໃດແມ່ນລັກສະນະສຳຄັນຂອງການສຶກສາໃນໂຮງຮຽນ?",
            options: [
                "ບໍ່ມີການປະເມີນຜົນ",
                "ມີຄວາມຢືດຢຸ່ນສູງ, ບໍ່ມີຊັ້ນຮຽນ",
                "ມີຫຼັກສູດທີ່ກຳນົດໄວ້ຢ່າງເປັນທາງການ ແລະ ມີການສອບເສັງ",
                "ບໍ່ມີຄູອາຈານ"
            ],
            answer: "ມີຫຼັກສູດທີ່ກຳນົດໄວ້ຢ່າງເປັນທາງການ ແລະ ມີການສອບເສັງ",
            explanation: "ການສຶກສາໃນໂຮງຮຽນມີຫຼັກສູດ, ການປະເມີນຜົນ, ແລະ ລະບົບຊັ້ນຮຽນທີ່ຊັດເຈນ."
        },
        {
            question: "ການສຶກສາລະດັບໃດທີ່ສອນການອ່ານ, ຂຽນ, ແລະ ຄິດໄລ່ຂັ້ນພື້ນຖານ?",
            options: [
                "ການສຶກສາເບື້ອງຕົ້ນ (ອະນຸບານ)",
                "ການສຶກສາປະຖົມ",
                "ການສຶກສາມັດທະຍົມປາຍ",
                "ການສຶກສາຊັ້ນສູງ (ມະຫາວິທະຍາໄລ)"
            ],
            answer: "ການສຶກສາປະຖົມ",
            explanation: "ການສຶກສາປະຖົມສຸມໃສ່ການສ້າງພື້ນຖານຄວາມຮູ້ຂັ້ນພື້ນຖານ."
        },
        {
            question: "ການສຶກສາໃນໂຮງຮຽນມີຄວາມສຳຄັນຕໍ່ການພັດທະນາປະເທດຊາດແນວໃດ?",
            options: [
                "ເຮັດໃຫ້ປະເທດບໍ່ຈຳເປັນຕ້ອງມີໂຮງງານ",
                "ສ້າງພົນລະເມືອງທີ່ມີຄວາມຮູ້ ແລະ ຄວາມສາມາດ",
                "ສຸມໃສ່ແຕ່ການຫຼິ້ນກິລາເທົ່ານັ້ນ",
                "ຫຼຸດຜ່ອນຄວາມສຳຄັນຂອງຄອບຄົວ"
            ],
            answer: "ສ້າງພົນລະເມືອງທີ່ມີຄວາມຮູ້ ແລະ ຄວາມສາມາດ",
            explanation: "ການສຶກສາສ້າງພົນລະເມືອງທີ່ມີຄຸນນະພາບເພື່ອພັດທະນາປະເທດຊາດ."
        },
        {
            question: "ຜູ້ທີ່ສຳເລັດການສຶກສາໃນລະບົບໂຮງຮຽນຈະໄດ້ຮັບຫຍັງ?",
            options: [
                "ຂອງຂວັນ",
                "ໃບປະກາດສະນີຍະບັດ ຫຼື ໃບຢັ້ງຢືນການສຶກສາ",
                "ສິດທິພິເສດໃນການຊື້ສິນຄ້າ",
                "ໃບອະນຸຍາດຂັບຂີ່"
            ],
            answer: "ໃບປະກາດສະນີຍະບັດ ຫຼື ໃບຢັ້ງຢືນການສຶກສາ",
            explanation: "ການສຶກສາໃນໂຮງຮຽນມີການອອກໃບປະກາດເພື່ອຢັ້ງຢືນການຮຽນ."
        },
        {
            question: "ການສຶກສາຊັ້ນສູງປະກອບມີສະຖາບັນປະເພດໃດແດ່?",
            options: [
                "ໂຮງຮຽນອະນຸບານ ແລະ ປະຖົມ",
                "ໂຮງຮຽນມັດທະຍົມຕົ້ນ ແລະ ປາຍ",
                "ວິທະຍາໄລ, ມະຫາວິທະຍາໄລ, ວິທະຍາໄລວິຊາຊີບ",
                "ສູນຝຶກອົບຮົມໄລຍະສັ້ນ"
            ],
            answer: "ວິທະຍາໄລ, ມະຫາວິທະຍາໄລ, ວິທະຍາໄລວິຊາຊີບ",
            explanation: "ການສຶກສາຊັ້ນສູງແມ່ນການສຶກສາຫຼັງຈາກມັດທະຍົມປາຍ."
        },
        {
            question: "ການສຶກສາໃນໂຮງຮຽນຊ່ວຍພັດທະນາທັກສະຊີວິດແນວໃດ?",
            options: [
                "ສອນສະເພາະການແຂ່ງຂັນກິລາ",
                "ສອນທັກສະການຄິດວິເຄາະ, ການແກ້ໄຂບັນຫາ, ແລະ ການເຮັດວຽກເປັນທີມ",
                "ສອນພຽງການນອນຫຼັບ",
                "ບໍ່ມີສ່ວນກ່ຽວຂ້ອງກັບທັກສະຊີວິດ"
            ],
            answer: "ສອນທັກສະການຄິດວິເຄາະ, ການແກ້ໄຂບັນຫາ, ແລະ ການເຮັດວຽກເປັນທີມ",
            explanation: "ນອກຈາກຄວາມຮູ້, ໂຮງຮຽນຍັງສອນທັກສະທີ່ຈຳເປັນໃນຊີວິດ."
        },
        {
            question: "ການສຶກສາເບື້ອງຕົ້ນ (Early Childhood Education) ແມ່ນສຳລັບກຸ່ມໃດ?",
            options: [
                "ນັກສຶກສາມະຫາວິທະຍາໄລ",
                "ຜູ້ໃຫຍ່ທີ່ຕ້ອງການຮຽນຮູ້ໃໝ່",
                "ເດັກກ່ອນໄວຮຽນ (ເຊັ່ນ: ອະນຸບານ)",
                "ຜູ້ສູງອາຍຸ"
            ],
            answer: "ເດັກກ່ອນໄວຮຽນ (ເຊັ່ນ: ອະນຸບານ)",
            explanation: "ການສຶກສາເບື້ອງຕົ້ນແມ່ນສຳລັບເດັກນ້ອຍໃນໄວເລີ່ມຕົ້ນ."
        },
        {
            question: "ຂໍ້ໃດຕໍ່ໄປນີ້ແມ່ນບົດບາດສຳຄັນຂອງຄູອາຈານໃນລະບົບການສຶກສາໂຮງຮຽນ?",
            options: [
                "ມີໜ້າທີ່ຮັບປະກັນອາຫານໃຫ້ແກ່ນັກຮຽນ",
                "ສອນ, ຊີ້ນໍາ, ແລະ ປະເມີນຜົນການຮຽນຮູ້ຂອງນັກຮຽນ",
                "ເຮັດຄວາມສະອາດໂຮງຮຽນເທົ່ານັ້ນ",
                "ເປັນພຽງຜູ້ສັງເກດການ"
            ],
            answer: "ສອນ, ຊີ້ນໍາ, ແລະ ປະເມີນຜົນການຮຽນຮູ້ຂອງນັກຮຽນ",
            explanation: "ຄູອາຈານມີບົດບາດຫຼັກໃນການຖ່າຍທອດຄວາມຮູ້ ແລະ ປະເມີນຜົນ."
        },
        {
            question: "ການສຶກສາໃນໂຮງຮຽນມີຈຸດປະສົງເພື່ອປູກຝັງຫຍັງໃຫ້ແກ່ນັກຮຽນ?",
            options: [
                "ຄວາມເຫັນແກ່ຕົວ",
                "ຄຸນທຳ, ຈັນຍາບັນ, ແລະ ຄຸນຄ່າຂອງການເປັນພົນລະເມືອງທີ່ດີ",
                "ຄວາມຂີ້ຄ້ານ",
                "ນິໄສການລັກຂະໂມຍ"
            ],
            answer: "ຄຸນທຳ, ຈັນຍາບັນ, ແລະ ຄຸນຄ່າຂອງການເປັນພົນລະເມືອງທີ່ດີ",
            explanation: "ນອກຈາກຄວາມຮູ້, ການສຶກສາໃນໂຮງຮຽນຍັງສອນຄຸນສົມບັດໃຫ້ແກ່ນັກຮຽນ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length; // Set total questions display
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        // Disable all option buttons after an answer is selected
        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct'); // Highlight correct answer
            } else {
                button.classList.add('wrong'); // Highlight wrong answers
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block'; // Show next question button
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    quizContainer.innerHTML = `
        <p>ກົດປຸ່ມ "ເລີ່ມທົດສອບ" ເພື່ອເລີ່ມຕົ້ນ!</p>
        <button id="start-quiz-btn">ເລີ່ມທົດສອບ</button>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
