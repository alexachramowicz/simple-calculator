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

function sqrt(a,b) {

}

function operate(operator,a,b) {
    let value;
    // check for Number()?
    switch(operator) {
        case add:
            value = add(a,b);
        case subtract:
            value = subtract(a,b);
        case multiply:
            value =multiply(a,b);
        case divide:
            value =divide(a,b);
        default:
            value = 0;
    }

}

const calcContainer = document.querySelector('.calculator-container');
const operandButtons = document.querySelectorAll('.operand-btn');

operandButtons.forEach(operandButton => { 
    operandButton.addEventListener('click', () => { 
        console.log(operandButton.textContent);
    });
});


const operatorButton = document.querySelectorAll('.operator-btn');