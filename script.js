//Buttons 
let buttons = Array.from(document.querySelectorAll('.number'));
let operators = Array.from(document.querySelectorAll('.operator'));
let clear = document.querySelector('#clear').addEventListener('click', () => {
    displayNumber.innerHTML = '';
    currentNumber = '';
    n1 = '';
});
let clearEntry = document.querySelector('#clearEntry').addEventListener('click', () => {
    currentNumber = n1
    displayNumber.innerHTML = currentNumber;
    n1 = '';
});

//Numbers
let displayNumber = document.querySelector('#current-number');
let currentNumber = '';
let n1 = '0';

//number buttons
buttons.forEach(element => {
    return element.addEventListener('click', () => {
        displayNumber.innerHTML += element.dataset.indexNumber;
        currentNumber += element.dataset.indexNumber;
    });
});

//operators buttons
operators.forEach(element => {
    return element.addEventListener('click', () => {
        // = OPERATE 
        if (n1 != 0) {returnOperation()};
        // + ADD
        if (element.dataset.operatorType != '' && n1 == 0) {
            n1 = Number(currentNumber);
            currentNumber = '';
        }
        displayNumber.innerHTML += element.dataset.operatorType;
    });
});

// = OPERATE 
let returnOperation = () => {
    if (n1 == 0 && currentNumber == '') {
        return
    }
    else {
        currentNumber = operate(n1, Number(currentNumber));
        displayNumber.innerHTML = currentNumber;
        n1 = 0;
    }
}

let equalsBtn = document.querySelector('.operate').addEventListener('click', returnOperation);

// + - x ÷ =
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let operate = (a, b) => {
    if (displayNumber.innerHTML.includes('+')){
        return add(a, b);
    };
    if (displayNumber.innerHTML.includes('-')){
        return subtract(a, b);
    };
    if (displayNumber.innerHTML.includes('x')){
        return multiply(a, b);
    };
    if (displayNumber.innerHTML.includes('÷')){
        return divide(a, b);
    };
};