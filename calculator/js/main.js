const calculator = document.querySelector(".calculator");
const btnNumber = document.querySelector(".btn number");
const display = document.querySelector(".display");
const equalButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
let buttons = Array.from(document.querySelectorAll("button"));

clearButton.addEventListener('click', function(e) {
    e.preventDefault()
    clearButton.value +='';
})

buttons.map((button) => {
    button.addEventListener('click', (e) => {
switch (e.target.innerText) {
case "AC":
    display.innerText = "0";
    break;
    case "=":
        try {
        display.innerText = eval(display.innerText);
} catch (e) {
        display.innerText = "Error!";
}
    break;
    case "+/-":
    display.innerText = "-";
    case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
    default:
    if (display.innerText === "0"&& e.target.innerText != ".") {
        display.innerText = e.target.innerText;
    } else {
        display.innerText += e.target.innerText;
    }
}

    })
})