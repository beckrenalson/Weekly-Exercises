const numberToGuess = Math.floor(Math.random() * 100);

function guessNumber() {
    let correctOrNot = document.getElementById("message");
    let userInput = document.getElementById("chosenNumber");
    let chosenNumber = parseInt(userInput.value);

    if (chosenNumber == numberToGuess) {
        correctOrNot.innerHTML = "You chose correct!";
        // correctOrNot.style.backgroundColor("green");
    } else {
        correctOrNot.innerHTML = "Incorrect!";
    }
} 

console.log(numberToGuess);