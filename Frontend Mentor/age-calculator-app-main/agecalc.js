function getBirthday() {
    let day = document.getElementById("inputDay").value;
    let month = document.getElementById("inputMonth").value;
    let year = document.getElementById("inputYear").value;

    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    if (!day || !month || !year) {
        alert("Please enter a day, month, and year.");
        return getBirthday;
    } else {
        let birthday = `${year}-${month}-${day}`;
        console.log(birthday);
        return getBirthday;
    }
}

function currentDate() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();

    console.log(`${currentYear}-${currentMonth}-${currentDay}`);
} 


// const currentDay = new Date.prototype.getDate();
// console.log(currentDay);



// let dayDifference = parseInt(day) - currentDate;

submitData.addEventListener("click", getBirthday);
currentDate();