let amountInput = document.getElementById("mortgageAmount");
let termInput = document.getElementById("mortgageTerm");
let rateInput = document.getElementById("mortgageRate");
let calculateBtn = document.getElementById("calc");
let clearAllBtn = document.getElementById("reset");
let radioButtons = document.querySelectorAll(".select");

calculateBtn.addEventListener("click", function () {
    let amount = parseFloat(amountInput.value);
    let years = parseFloat(termInput.value);
    let rate = parseFloat(rateInput.value) / 100;

    if (isNaN(amount) || isNaN(years) || isNaN(rate)) {
        alert("Please enter valid numbers for all fields");
        return;
    }

    let mortgageType = "";
    radioButtons.forEach(function(radio) {
        if (radio.checked) {
            mortgageType = radio.parentElement.textContent.trim();
        }
    });

    let monthlyPayment, totalPayment;

    if (mortgageType === "Repayment") {
        console.log("repayment");

        let monthlyRate = rate / 12;
        let numberOfPayments = years * 12;

        monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        totalPayment = monthlyPayment * numberOfPayments;
    } else {

        console.log("interest");
        monthlyPayment = amount * (rate / 12);
        totalPayment = (monthlyPayment * years * 12) + amount;
    }

    document.querySelector(".monthlyRepayment").textContent = `£ ${monthlyPayment.toFixed(2)}`;
    document.querySelector(".termRepayment").textContent = `£ ${totalPayment.toFixed(2)}`;
    document.querySelector(".completedResults").style.display = "block";
    document.querySelector(".emptyResults").style.display = "none";
});

clearAllBtn.addEventListener("click", function () {

    let inputs = document.querySelectorAll(".inputs");

    inputs.forEach(function (input) {
        input.value = " ";
    });

    radioButtons.forEach(function (radio) {
        radio.checked = false;
    });

    document.querySelector(".complete").style.display = "none";
    document.querySelector(".placeholder").style.display = "flex";
});


