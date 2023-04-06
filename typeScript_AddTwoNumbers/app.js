"use strict";
let num1Element = document.getElementById('num1'); //typecasting
let num2Element = document.getElementById('num2');
let buttonElement = document.querySelector('button'); //in strict mode, TypeScript shows buttonElement might be null as it doesn't checks html code
// that statement could be null theoritically put ! to say that it's not null in our words
const numResults = [];
const textResults = [];
buttonElement.addEventListener('click', () => {
    let num1 = num1Element.value;
    let num2 = num2Element.value;
    const result = add(+num1, +num2); //as num1,num2 returns a string so we have to convert it to number
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    console.log(numResults);
    console.log(textResults);
    printResult({ val: result, timestamp: new Date() });
});
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2; //converting it to number
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 2000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
//console.log(add(1,6))
//console.log(add("10","5")) //it will throw an error in the compile time 
//that is why we use typeScript , to write bug free code and to avoid runtime error
