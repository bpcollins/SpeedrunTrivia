var questions = document.getElementsByClassName("question");
var learnMoreButton = document.querySelector("button[onclick='my_modal_2.showModal()']");
var openAnswer = null;

learnMoreButton.addEventListener("click", function () {
    var allAnswers = document.getElementsByClassName("answer");

    for (var j = 0; j < allAnswers.length; j++) {
        allAnswers[j].classList.add("hidden");
        allAnswers[j].style.maxHeight = null; // Reset max-height
    }

    openAnswer = null;
});

for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        var answer = this.getElementsByClassName("answer")[0];

        if (openAnswer !== answer) {
            if (openAnswer) {
                openAnswer.classList.add("hidden");
                openAnswer.style.maxHeight = null;
            }
        }

        answer.classList.toggle("hidden");

        if (answer.classList.contains("hidden")) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }

        openAnswer = answer;
    });
}
