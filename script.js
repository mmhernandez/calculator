var calcDisplayElement = document.getElementById("calculator-display");


function numPress(element) {
    if(calcDisplayElement.innerText == 0){
        calcDisplayElement.innerText = element.innerText;
    } else {
        calcDisplayElement.innerText += element.innerText;
    }
}

function mathKeyPress(element) {
    console.log(element.innerText);
}

function reset() {
    calcDisplayElement.innerText = 0;
}