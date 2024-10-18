let number1 = document.getElementById("num1-el");
let number2 = document.getElementById("num2-el");
let output = document.getElementById("res-el");

let addButton = document.getElementsByTagName("button")[0];
let subtractButton = document.getElementsByTagName("button")[1];
let divideButton = document.getElementsByTagName("button")[2];
let multiplyButton = document.getElementsByTagName("button")[3];

let num1 = 12;
let num2 = 6;
let result = 0;

function add() {
    result = num1 + num2;
    displayValues();
}

function subtract() {
    result = num1 - num2;
    displayValues();
}

function divide() {
    result = num1 / num2;
    displayValues();
}

function multiply() {
    result = num1 * num2;
    displayValues();
}

function displayValues() {
    number1.innerHTML = num1;
    number2.innerHTML = num2;
    output.innerHTML = "Result: " + result;
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
divideButton.addEventListener("click", divide);
multiplyButton.addEventListener("click", multiply);