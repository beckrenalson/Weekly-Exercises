let promptResult = prompt("Enter your name");
let greeting = greet(promptResult);

function greet(inputName) {
    if (inputName == "tomo") {
        inputName = "hi";
    }
    return inputName 
}

console.log("Hello " + greeting);