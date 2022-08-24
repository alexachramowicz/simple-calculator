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

function calculateOperand() {

}

// Clear display and all values from variables
function clear() {
    firstOperand = null;
    secondOperand = null;
    operator = null;
    displayContent.textContent = null;
}

const calcContainer = document.querySelector('.calculator-container');
const operandButtons = document.querySelectorAll('.operand-btn');
const displayContent = document.querySelector('#display');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalsButton = document.querySelector('#equals-btn')
const clearButton = document.querySelector('#clear-btn');

let firstOperand, secondOperand, operator, result;
let resultFlag = false;

operandButtons.forEach(operandButton => { 
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
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        operator = operatorButton.value;
    });
});

equalsButton.addEventListener('click', () => {
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
})

clearButton.addEventListener('click', clear); 