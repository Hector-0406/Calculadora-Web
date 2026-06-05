let currentInput = '0';
let historyText = '';

const resultDisplay = document.getElementById('result');
const historyDisplay = document.getElementById('history');

function updateDisplay() {
    resultDisplay.innerText = currentInput;
    historyDisplay.innerText = historyText;
}

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    historyText = currentInput + ' ' + op;
    currentInput = '0';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    historyText = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') currentInput = '0';
    updateDisplay();
}

function calculate() {
    try {
        let expression = historyText + ' ' + currentInput;
        // Limpiamos la expresión para seguridad
        let result = eval(expression.replace('×', '*').replace('÷', '/'));
        historyText = expression + ' =';
        currentInput = result.toString();
        updateDisplay();
    } catch (e) {
        currentInput = "Error";
        updateDisplay();
    }
}
