var questions = document.getElementsByClassName("question");

for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        var answer = this.getElementsByClassName("answer")[0];
        var allAnswers = document.getElementsByClassName("answer");

        for (var j = 0; j < allAnswers.length; j++) {
            allAnswers[j].classList.add("hidden");
        }

        answer.classList.remove("hidden");

        if (answer.classList.contains("hidden")) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
}
