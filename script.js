function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function sqrt(a) {
    return Math.sqrt(a);
}

function percentage(a) {
    return a * 0.01;
}

function squared(a) {
    return a**2;
}

function unaryOperate(operator, a) {
    let value;

    switch(operator) {
        case 'sqrt':
            value = sqrt(a);
            break;
        case 'percentage':
            value = percentage(a);
            break;
        case 'squared':
            value = squared(a);
            break;
        default:
            value = 0;
    }
    if(!isInt(value))
        value = value.toFixed(5);
    return value;
}


function binaryOperate(operator,a,b) {
    let value;
    // check for Number()?
    switch(operator) {
        case 'add':
            value = add(a,b);
            break;
        case 'subtract':
            value = subtract(a,b);
            break;
        case 'multiply':
            value = multiply(a,b);
            break;
        case 'divide':
            value = divide(a,b);
            break;
        default:
            value = 0;
    }
    if(!isInt(value))
        value = value.toFixed(5);
    return value;
}

function calculate() {
    let value = binaryOperate(operator, parseInt(firstOperand), parseInt(secondOperand));
    console.log(firstOperand + operator + secondOperand + '=' + value);

    if(!isFinite(value)) {
        displayContent.textContent = 'Error';
        firstOperand = null;
    } else {
        firstOperand = value;
        displayContent.textContent = firstOperand;
    }
    resultFlag = true;
    secondOperand = null;
    operator = null;
}

function calculateUnary(unaryOperator) {
    unaryOperator.addEventListener('click', () => {
        if(firstOperand) {
            operator = unaryOperator.value;
            let value = unaryOperate(operator, firstOperand);
            console.log(operator + firstOperand + '=' + value);
            firstOperand = value;
            displayContent.textContent = firstOperand;
        } else {
            clear();
        }
    })
}

function updateOperand(operandButton) {
    operandButton.addEventListener('click', () => { 
        const operand = operandButton.value;
        // Assign or re-assign the firstOperand
        if(!firstOperand || (resultFlag && !operator)) {
            firstOperand = operand;
            displayContent.textContent = firstOperand;
            resultFlag = false;
        } else if(firstOperand && !operator && !secondOperand) {
            firstOperand += operand;
            displayContent.textContent = firstOperand;;
        } else if (firstOperand && operator && !secondOperand){
            secondOperand = operand;
            displayContent.textContent = secondOperand;
        } else {   
            secondOperand += operand;
            displayContent.textContent = secondOperand;
        }
    });
}

function updateOperator(operatorButton) {
    operatorButton.addEventListener('click', () => {
        if(operator && firstOperand && secondOperand) 
            calculate();

        operator = operatorButton.value;
    });
}

function isInt(n) {
    return n%1 === 0;
}

// Clear display and all values from variables
function clear() {
    firstOperand = null;
    secondOperand = null;
    operator = null;
    displayContent.textContent = '0';
}

const calcContainer = document.querySelector('.calculator-container');
const operandButtons = document.querySelectorAll('.operand-btn');
const displayContent = document.querySelector('#display');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalsButton = document.querySelector('#equals-btn')
const clearButton = document.querySelector('#clear-btn');
const unaryOperatorButtons = document.querySelectorAll('.unary-operator-btn')

let firstOperand, secondOperand, operator, result;
let resultFlag = false;

displayContent.textContent = '0';

operandButtons.forEach(operandButton => updateOperand(operandButton));
unaryOperatorButtons.forEach(unaryOperator => calculateUnary(unaryOperator));
operatorButtons.forEach(operatorButton => updateOperator(operatorButton));
equalsButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clear); 