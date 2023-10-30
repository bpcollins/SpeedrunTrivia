var questions = document.getElementsByClassName("question");

for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        var answer = this.getElementsByClassName("answer")[0];
        answer.classList.toggle("hidden");
    });
}
