
const numberButton = document.querySelectorAll('.number-btn');
const operatorButton = document.querySelectorAll('.operator-btn');
const equalButton = document.querySelector('#equal-btn');
const clearlButton = document.querySelector('#clear-btn');
const bottomDisplayScreen = document.querySelector('#screen-bottom');
const topDisplayScreen = document.querySelector('#screen-top');

let bottomDisplayString = ""
let topDisplayString = ""
let firstDigit, operator, secondDigit
let resultsDisplayed = false


const ADD = (a, b) => a + b;
const SUB = (a, b) => a - b;
const MULT = (a, b) => a * b;
const DIV = (a, b) => a / b;
const stringLimit = (string) => string.length > 10 ? string.substring(0, 10) : string

function performEquation(firstDigit, secondDigit, operator){
    let result
    console.log(firstDigit, secondDigit, operator)
    operator == "+" ? result = ADD(firstDigit, secondDigit) : false
    operator == "-" ? result = SUB(firstDigit, secondDigit) : false
    operator == "*" ? result = MULT(firstDigit, secondDigit) : false
    operator == "/" ? result = DIV(firstDigit, secondDigit) : false
    return result
}

function updateDisplay(){
    topDisplayString = stringLimit(topDisplayString)
    bottomDisplayString = stringLimit(bottomDisplayString)
    topDisplayScreen.textContent = stringLimit(topDisplayString)
    bottomDisplayScreen.textContent = stringLimit(bottomDisplayString)
    
}

function clearDisplay(){
    bottomDisplayString = "" 
    topDisplayString = ""
    resultsDisplayed = false
    updateDisplay()
}

numberButton.forEach((button) => {
    button.addEventListener('click', () => {
        let number = button.getAttribute('data-key')

        resultsDisplayed ? clearDisplay() : false

        bottomDisplayString += number
        updateDisplay()
    })
})

operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        let number = button.getAttribute('data-key')
        firstDigit = parseFloat(bottomDisplayString)
        operator = number
        bottomDisplayString += number
        topDisplayString = bottomDisplayString
        bottomDisplayString = ""
        updateDisplay()
    })
})

equalButton.addEventListener('click', () => {
    topDisplayString += bottomDisplayString + "="
    secondDigit = parseFloat(bottomDisplayString)

    bottomDisplayString = ""

    bottomDisplayString = Math.round(performEquation(firstDigit, secondDigit, operator) * 1e5) / 1e5
    updateDisplay()

    resultsDisplayed = true
})

clearlButton.addEventListener('click', () => { clearDisplay() })




