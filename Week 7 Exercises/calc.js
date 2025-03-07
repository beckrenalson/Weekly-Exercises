function calculate(num1, num2, operator) {
    let equation
    if (operator == "+") {
        equation = num1 + num2;
    }
    else if (operator == "/") {
        equation = num1 / num2;
    }
    else if (operator == "-") {
        equation = num1 - num2;
    }
    else if (operator == "*") {
        equation = num1 * num2;
    }
    return equation
}

console.log(calculate(5, 5, "+"));