const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
  }),
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  computerChoice = possibleChoices[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice.id;
}
