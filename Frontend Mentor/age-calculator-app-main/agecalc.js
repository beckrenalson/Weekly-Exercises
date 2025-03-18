let day = document.getElementById("inputDay").value;
let month = document.getElementById("inputMonth").value;
let year = document.getElementById("inputYear").value;

// function getAge() {
//     dobInputDay = document.getElementById("inputDay");
//     dobInputMonth = document.getElementById("inputMonth");
//     dobInputYear = document.getElementById("inputYear");

//     if (!dobInputDay || !dobInputMonth || !dobInputYear) {
//         alert("Please enter day, month, and year.");
//         return;
//     }
// }
const currentDateInput = new Date();
console.log(currentDateInput);

function getDob() {
    let dob = new Date(year,month,day);
    return dob;
}

submitData.addEventListener("click", function outputAge() {
    console.log(getDob());
});