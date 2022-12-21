var calcDisplayElement = document.getElementById("calculator-display");
var firstMathTerm = 0;
var operator = '';


function numPress(element) {
    if(calcDisplayElement.innerText == 0 || calcDisplayElement.innerText == firstMathTerm){
        calcDisplayElement.innerText = element.innerText;
    } 
    else {
        calcDisplayElement.innerText += element.innerText;
    }
}

function mathKeyPress(element) {
    operator = element.innerText;
    firstMathTerm = calcDisplayElement.innerText;
}

function reset() {
    calcDisplayElement.innerText = 0;
    firstMathTerm = 0;
    operator = '';
}

function calculate() {
    var stringResult = firstMathTerm + operator + calcDisplayElement.innerText;
    calcDisplayElement.innerText = eval(stringResult).toFixed(3);
}