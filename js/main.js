let inputField = document.querySelector(".input__field");
let allValues;

function valueParser() {
    const operators = ['\u002B', '\u2212', '\u00d7', '\u00f7'];
    let opArray = [];
    let opArrayIndex = 0;
    let numArrayIndex = 0;
    let numArray = [];

    if (operators.includes(allValues[0]) || allValues[0] === '.') {
        inputField.textContent = 'Cannot start with operator or . ';
    } else {
        for (let i = 0; i < allValues.length; i += 1) {
            if (operators.includes(allValues[i])) {
                opArray[opArrayIndex] = allValues[i];
                opArrayIndex = opArrayIndex + 1;
                numArrayIndex = numArrayIndex + 1;
            }
            else {
                if (numArray[numArrayIndex] === undefined) {
                    numArray[numArrayIndex] = allValues[i];
                } else {
                    numArray[numArrayIndex] = numArray[numArrayIndex] + allValues[i];
                }
            }

        }

        console.log(allValues);
        console.log(numArray);
        console.log(opArray);
    }
}

///set up eraser button///
(document.querySelector(".button__eraser")).addEventListener("click", () => {
    inputField.textContent = '';
})

///set up inputs///
let numbers = document.querySelectorAll(".button__numbers");
numbers.forEach(item => item.addEventListener("click", () => {
    inputField.textContent = inputField.textContent + item.textContent;
}))

///set up equals///
let equals = document.querySelector(".button__Equals");
equals.addEventListener("click", () => {
    allValues = [...inputField.textContent];
    inputField.textContent = '';
    valueParser();
})

