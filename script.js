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

// function sqrt(a) {
//     return Math.sqrt(a);
// }

// function remainder(a,b) {
//     return a%b;
// }

function unaryOperate(operator, a) {
    let value;

    switch(operator) {
        case sqrt:
            value = sqrt(a);
        default:
            value = 0;
    }
    return value;
}


function binaryOperate(operator,a,b) {
    let value;
    // check for Number()?
    switch(operator) {
        case 'add':
            value = add(a,b);
            console.log(value);
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
    return value;
}

const calcContainer = document.querySelector('.calculator-container');
const operandButtons = document.querySelectorAll('.operand-btn');
const displayContent = document.querySelector('#display');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalsButton = document.querySelector('#equals-btn')
const clearButton = document.querySelector('#clear-btn');

let firstOperand, secondOperand, operator;

operandButtons.forEach(operandButton => { 
    operandButton.addEventListener('click', () => { 
        if(!firstOperand) {
            firstOperand = parseInt(operandButton.value);
        } else {
            secondOperand = parseInt(operandButton.value);
        }
        displayContent.textContent = operandButton.value;
    });
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        operator = operatorButton.value;
    });
});

equalsButton.addEventListener('click', () => {
    const value = binaryOperate(operator, firstOperand, secondOperand);
    console.log(firstOperand + operator + secondOperand + '=' + value);
    displayContent.textContent = value;
})
