const questions = document.querySelectorAll(".q");

questions.forEach(function(question, index) {
    question.addEventListener("click", function(event) {
       
        let answer = question.nextElementSibling;
        let icon = question.querySelector(".icon");

        console.log(icon);
        if(answer.style.display == "block") {
            answer.style.display = "none";
            icon.src = "assets/images/icon-plus.svg";
        } else {
            answer.style.display = "block";
            icon.src = "assets/images/icon-minus.svg";
        }
    })
}); 



// Refactor function into separate function
// Console log each element (question, answer, icon