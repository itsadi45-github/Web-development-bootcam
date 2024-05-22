console.log("Faulty Calculator making");

// inputing numbers from the user
let a = prompt("Enter your 1st number ");
let b = prompt("Enter your 2nd number ");
let c = prompt("Enter operation");

let random = Math.random();

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

if (random > 0.1) {
    // perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
    // perform wrong calculation
    c = obj[c];
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
/*
// console.log("Faulty Calculator making");

// const prompt = require('prompt-sync')();

// // putting ramdom numbers 
// // inputing number from user
// let a = prompt("Enter your 1st number ");
// let b = prompt("Enter your 2nd number ");
// let c = prompt("Enter operation");

// let random = Math.random();

// let obj = {
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"**"
// }


// /*if (random > 0.1) {
// //    perform correct calculation
//     console.log("The Addition is:", a + b);
//     console.log("The Multiplication is:", a * b);
//     console.log("The Substraction is:", a - b);
//     console.log("The Division is:", a / b);
    
// }

// else {
//     // perform wrong calculation
//     c = obj[c]
//     console.log("The Addition is:", a - b);
//     console.log("The Substraction is:", a / b);
//     console.log("The Multiplication is:", a + b);
//     console.log("The Division is:", a ** b);
// }
// */
// if (random > 0.1) {
// //    perform correct calculation
// console.log(`The result is ${a} ${c} ${b}`);
// alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

// }

// else {
//     // perform wrong calculation
//     c = obj[c]
//     console.log(`The result is ${a} ${c} ${b}`);
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
// }/*

