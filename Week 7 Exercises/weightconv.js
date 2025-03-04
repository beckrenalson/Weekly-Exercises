let unit = prompt("Enter weight unit to convert from");
let inputWeight = prompt("Enter weight amount");

function kiloToPound(weight) {
    return weight * 2.2;
}

function poundToKilo(weight) {
    return weight / 2.2;
}

if (unit == "kilo") {
    console.log(kiloToPound(inputWeight));
}

else if (unit == "pound") {
    console.log(poundToKilo(inputWeight));
}