const students = ["Bob", "Wiremu", "Nimue", "Euguene", "Joffri", "Tyrone", "Denise"];

const selectButton = document.getElementById("selectButton");
const studentDisplay = document.getElementById("studentDisplay");

let lastSelectedStudent = null;

selectButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * students.length);
    console.log(randomIndex);

    if (lastSelectedStudent) {
        lastSelectedStudent.style.backgroundColor = "#FFFFFF";
        lastSelectedStudent.style.color = "#000000";
    }

    const selectedStudent = document.getElementById(`student-${randomIndex}`);

    selectedStudent.style.backgroundColor = "#000000";
    selectedStudent.style.color = "#FFFFFF";

    lastSelectedStudent = selectedStudent;

})

students.forEach((studentName, index) => {
    const studentElement = document.createElement('div');
    studentElement.classList.add("student");
    studentElement.id = `student-${index}`;
    studentElement.textContent = studentName;
    studentDisplay.append(studentElement);
})
