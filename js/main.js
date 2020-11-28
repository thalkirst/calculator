
let eraser = document.querySelector(".button__eraser");
eraser.addEventListener("click", () => {
    let inputField = document.querySelector(".input__field");
    inputField.textContent = '';
})

let numbers = document.querySelectorAll(".button__numbers");
numbers.forEach(item => item.addEventListener("click", () => {
    let inputField = document.querySelector(".input__field");
    inputField.textContent = inputField.textContent + item.textContent;
}))