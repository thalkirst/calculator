let inputField = document.querySelector(".input__field");
let allValues;
let opArray = [];
let numArray = [];
let numArrayNumbers = [];
let endResult;

function valueParser() {
    const operators = ['\u002B', '\u2212', '\u00d7', '\u00f7'];

    let opArrayIndex = 0;
    let numArrayIndex = 0;


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
        numArrayNumbers = numArray.map(item => parseFloat(item));
    }
}

function counter () {
    let result = numArrayNumbers[0]
    let j = 0;
    for (let i = 1; i < numArrayNumbers.length; i += 1) {
        if (opArray[j] === '\u002B') {
            result = result + numArrayNumbers[i];
        }
        if (opArray[j] === '\u2212') {
            result = result - numArrayNumbers[i];
        }
        if (opArray[j] === '\u00d7') {
            result = result * numArrayNumbers[i];
        }
        if (opArray[j] === '\u00f7') {
            result = result / numArrayNumbers[i];
        }
        j = j +1;
    }
    return result;
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
    opArray = [];
    numArray = [];
    numArrayNumbers = [];
    allValues = [...inputField.textContent];
    valueParser();
    if (numArray.length <= opArray.length) {
        inputField.textContent = 'error: too many operators';    
    } else {
        endResult = counter();
        inputField.textContent = endResult;
    }
})

