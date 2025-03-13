const numberToGuess = Math.floor(Math.random() * 100);

function guessNumber() {
    let correctOrNot = document.getElementById("message");
    let userInput = document.getElementById("chosenNumber");
    let chosenNumber = parseInt(userInput.value);
    let refreshPage = document.getElementById("refresh");

    if (chosenNumber == numberToGuess) {
        correctOrNot.innerHTML = "You chose correct!";
        document.getElementById("message").style.backgroundColor = "green";
        document.getElementById("card").style.transform = "rotateY(360deg)";
        document.getElementById("card").style.transitionDuration = "5s";
        // document.body.style.backgroundImage = "url('trippy.gif')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.getElementById("reset").style.transform = "scale(0.5)";
    } else {
        correctOrNot.innerHTML = "Incorrect!";
        document.getElementById("message").style.backgroundColor = "red";
        document.getElementById("card").style.transform = "scale(0)";
        document.getElementById("card").style.transitionDuration = "1s";
        youFailed();
    }
}

function youFailed() {
    document.getElementById("fail").style.transform = "scale(100)";
    document.getElementById("fail").style.transitionDuration = "10s";
    document.getElementById("reset").style.transform = "scale(0.5)";
}

function refreshPage() {
    location.reload();
}

console.log(numberToGuess);