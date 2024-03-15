document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("myinput");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            inputField.value += this.textContent;
        });
    });
});
