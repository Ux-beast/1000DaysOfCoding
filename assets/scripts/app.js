
const defaultResult =0;
let currentResult = defaultResult;

function getUserNumberIput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
const calcDescription=`${resultBeforeCalc} ${operator} ${calcNumber} `;
outputResult(currentResult,calcDescription);
}

function add(){
    const enteredNumber = getUserNumberIput();
    const initialResult = currentResult;
    currentResult = currentResult+enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);
}

function sub(){
    const enteredNumber = getUserNumberIput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
}

function mult(){
    const enteredNumber = getUserNumberIput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
}

function div(){
    const enteredNumber = getUserNumberIput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
}


addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub)
multiplyBtn.addEventListener('click',mult)
divideBtn.addEventListener('click',div)