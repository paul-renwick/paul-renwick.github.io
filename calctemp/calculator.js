// //Set decimal button 
// //Set clear buttons
// //Set displayValElement, as in, the display window 
// //Set variable to get calc num buttons, do this by getElementsByClassName('calc-btn-num')
// //Set calc operater buttons, class name again by this time the operator classes
// //Setup displayvalue, this is the variable that is equal to what is on the display
// //Setup pending value, this is the variable that is equal to nothing at first, the pending value is going to hold values which ahve been entered
// //setup a variable to evauluate string arrays, set this as an empty array, it is going to hold the operations which we enter on the calculator
// //Setup the update display value function, make it equal to a function which responds when (clickObj) => { VAR BTNTEXT = CLICKOBJ.TARGET.INNERTEXT;
// DISPLAYVAL += BTNTEXT;
// DISPLAYVALELEMENT.INNERTEXT = DISPLAYVAL;
// }
// //Give num and operators a click function, begin by setting up a for loop, then assign an event listener ('click') to update the display value. Do this for both numbers and operators. 
//Set clear button function, make it so onClick = () => {
//     displayval = 0
//     pendingVal = undefined;
//     evaluateStrArr = [];
//     displayVal.innerText = displayVal;
// }

//Sets variables to use in later functions, associates the HTML elements with manipulable variables for JS
var btnPercent = document.getElementById('calc-percent');
var btnDecimal = document.getElementById('calc-decimal');
var btnAC = document.getElementById('calc-ac');
var btnCE = document.getElementById('calc-ce');
var displayValElement = document.getElementById('calc-display-val');

// Sets up the display (that which is visible when numbers are entered)
// Sets up the pending value, those values which are stored after the user has clicked an operator and prior to evaluation
// The evaluation string array, takes inputs from the display > pending variables and concatenates with the entered operators. It processes these as a string in the array and evaluates the outcome. 
var displayVal = '';
var pendingVal;
var evaluateStrArr = [];

// These variables are required for later for-loops. Since numbers and operators function differently on a calculator, they require different loops
var numBtns = document.getElementsByClassName('calc-btn-num');
var opBtns = document.getElementsByClassName('calc-btn-op');

// Creates a new variable that updates the value in the display, sets the update display val to a function, FINISH EXPLAINING WHAT THIS DOES
var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if(displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evaluateStrArr.push(pendingVal);
            evaluateStrArr.push('+');
        break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evaluateStrArr.push(pendingVal);
            evaluateStrArr.push('-');
        break;

        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evaluateStrArr.push(pendingVal);
            evaluateStrArr.push('*');
        break;

        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evaluateStrArr.push(pendingVal);
            evaluateStrArr.push('/');
        break;

        case '=':
            evaluateStrArr.push(displayVal);
            var evaluation = eval(evaluateStrArr.join(' '));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evaluateStrArr = [];
        break;
        
        default:
        break;
    }
}


for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', updateDisplayVal);
}

for (let i = 0; i < opBtns.length; i++) {
    opBtns[i].addEventListener('click', performOperation);
}

btnCE.onclick = () => {
    displayVal = '0';
    displayValElement.innerText = displayVal;
}

btnAC.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evaluateStrArr = [];
    displayValElement.innerText = displayVal;
}

btnDecimal.onclick = () => {
    if(!displayVal.includes('.'))
        displayVal += '.';
        displayValElement.innerText = displayVal;
} 

var owenWow = document.getElementById('owenWow');

btnPercent.addEventListener('click', () => {
    owenWow.play();
}
);

