const { useInsertionEffect } = require("react");

//Function to get current output
function getOutput() {
    return document.getElementById("output-value").innerText;
}
//Function to print output
function printOutput(num) {
    if (num == " ") {
        document.getElementById("otput-value").innerText = num;
    }
    else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}
//To format number with commas (optional)
function getFormattedNumber(num){
    if (num == "-") return "";
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}
// to remove commas for calculation
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}
// For number buttons
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number i .addEventListener('click', function () {
        if (this.id == "clear") {
            printOutput("");
            document.grtElementById("history-value").innerText = "";
        }
    }
}
else if (this.id == "backspace") {
    let output = reverseNumberFormat(getOutput()).toString();
}