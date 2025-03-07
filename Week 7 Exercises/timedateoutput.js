let input = prompt("Do you want to see the date or time?");

console.log(input);

const date = new Date().toDateString();
const time = new Date().toTimeString();

if (input === "date") {
    console.log(date);
}

else if (input === "time") {
    console.log(time);
}

else {
    console.log("ERROR");
}