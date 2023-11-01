var questions = document.getElementsByClassName("question");
var modalButton = document.querySelector("button[onclick='my_modal_2.showModal()']");

modalButton.addEventListener("click", function () {
    var answers = document.getElementsByClassName("answer");
    for (var i = 0; i < answers.length; i++) {
        answers[i].classList.add("hidden");
    }
});

for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        var answer = this.getElementsByClassName("answer")[0];
        answer.classList.toggle("hidden");
    });
}
