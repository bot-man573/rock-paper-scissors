document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultDiv = document.getElementById('result');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.dataset.choice;
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);
            resultDiv.textContent = `あなた: ${userChoice} コンピュータ: ${computerChoice} -> ${result}`;
        });
    });

    function getComputerChoice() {
        const choices = ["グー", "チョキ", "パー"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "引き分け";
        }
        if ((userChoice === "グー" && computerChoice === "チョキ") ||
            (userChoice === "チョキ" && computerChoice === "パー") ||
            (userChoice === "パー" && computerChoice === "グー")) {
            return "あなたの勝ち";
        } else {
            return "コンピュータの勝ち";
        }
    }
});
