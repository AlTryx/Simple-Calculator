// Simple Calculator

console.log(" - Calculator - ");
console.log(`List of operators:
+
/
`);
console.log("Enter your problem:");

function solve() {
var userInput1 = prompt();
var userNumber1 = parseFloat(userInput1);

if (!isNaN(userNumber1)) {
    
} else {
    console.log("Error!");
    return; 
}

var operator = prompt();

var userInput2 = prompt();
var userNumber2 = parseFloat(userInput2);

if (!isNaN(userNumber2)) {
    
} else {
    console.log("Error!");
    return; 
}

let result;

switch (operator) {
    case '+': result = (userNumber1 + userNumber2).toFixed(2); break;
    case '-': result = (userNumber1 - userNumber2).toFixed(2); break;
    case '/': result = (userNumber1 / userNumber2).toFixed(2); break;
    case '*': result = (userNumber1 * userNumber2).toFixed(2); break;
    default: result = "error"; break;
}

console.log("Result: " + result);
}

solve();