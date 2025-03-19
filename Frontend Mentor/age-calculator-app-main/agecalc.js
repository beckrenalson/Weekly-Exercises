function getBirthday() {
    let day = document.getElementById("inputDay").value;
    let month = document.getElementById("inputMonth").value;
    let year = document.getElementById("inputYear").value;

    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    if (!day || !month || !year) {
        alert("Please enter a day, month, and year.");
    } else {
        let birthdayOutput = `${year}-${month}-${day}`;
        console.log(birthdayOutput);
        return birthdayOutput;
    }
}

function currentDate() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();

    let dateOutput = `${currentYear}-${currentMonth}-${currentDay}`;
    console.log(dateOutput);
    return dateOutput;
}

function ageOutput() {
    let date1 = new Date(getBirthday());
    let date2 = new Date(currentDate());
    let dateDifference = date2 - date1;
    // console.log(dateDifference);

    let numberOfMillisecondsInOneYear = 365 * 24 * 60 * 60 * 1000;
    let numberOfYears = dateDifference / numberOfMillisecondsInOneYear;
    console.log(numberOfYears);

    let remainderMilliseconds = dateDifference % numberOfMillisecondsInOneYear;
    // console.log(remainderMilliseconds);

    let numberOfMillisecondsInOneMonth = 30 * 24 * 60 * 60 * 1000;
    let numberOfMonths = remainderMilliseconds / numberOfMillisecondsInOneMonth;
    console.log(numberOfMonths);

    remainderMilliseconds = dateDifference % numberOfMillisecondsInOneMonth;
    // console.log(remainderMilliseconds);

    let numberOfMillisecondsInOneDay = 24 * 60 * 60 * 1000;
    let numberOfDays = remainderMilliseconds / numberOfMillisecondsInOneDay;
    console.log(numberOfDays);

    // let outputYear = document.getElementById("yearOutput").innerText;
    // let outputMonth = document.getElementById("monthOutput").innerText;
    // let outputDay = document.getElementById("dayOutput").innerText;

}

submitData.addEventListener("click", ageOutput);
currentDate();