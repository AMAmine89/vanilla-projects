var oldValue        =   [],
    newValue        =   [],
    resultValue     =   '',
    decimalClick    =   false,
    mathOperator    =   '',
    secondClick     =   false,
    numbersPressed  =   [],
    i               =   1, // To add number after having result
    j               =   0,
    screen          =   document.getElementById('screen');

//Add number to screen with the previous clicked number
function addNumber(number) {
    if (!i && !mathOperator) {
        newValue[j]  = '';
        i++;
    }
    newValue[j]     = newValue[j] || 0;
    newValue[j]     +=  number;
    screen.value    =   newValue[j];
}

function numberPress(number) {

    if(number === '.') {
        if (!decimalClick) {
            if (screen.value !== 0 && mathOperator !== '' || screen.value    ===  0) {
                newValue[j]     +=  '0' + number;
                screen.value    =   newValue[j];
                decimalClick    =   true;
            } else {
                
                addNumber(number);
                decimalClick    =   true;
            }
        }
    } else {
       addNumber(number);
    }
    numbersPressed.push(number);
}

function operatorPress(operator) {

    mathOperator    =   operator;
    oldValue[j]     =   newValue[j];
    decimalClick    =   false;
    
    if (!secondClick) {
        
        secondClick = true
    } else {

        resultValue     =   eval(oldValue[j] + mathOperator + newValue[j-1]);
        newValue[j+1]   =   resultValue;
        screen.value    =   resultValue;
        i               =   0;
        secondClick     =   false;
    }
    j++;
}

function mathOperation() {

    resultValue     =   eval(oldValue[j-1] + mathOperator + newValue[j]);
    newValue[j]     =   resultValue;
    mathOperator    =   '';
    screen.value    =   resultValue;
    i               =   0;
    secondClick     =   false;
}

function clearScreen() {
    oldValue        =   [],
    newValue        =   [],
    resultValue     =   '',
    decimalClick    =   false,
    mathOperator    =   '',
    screen.value    =   0;
}

function removeNumber() {

    newValue[j]     =   newValue[j].replace(numbersPressed[numbersPressed.length - 1], '');
    numbersPressed.pop();
    screen.value    =   newValue[j];
}