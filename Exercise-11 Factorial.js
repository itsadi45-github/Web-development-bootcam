//   using for loop

let a = prompt('Enter Your Number that you want to calculate factorial')
a = Number.parseInt(a)
let sum = 1
console.log(a)

for (let i = a; i > 0; i--) {

    sum *= i
   
}

console.log(`The factorial of ${a} is = ${sum}`)




//  using reduce 

const redu = (a, b) => {
  return a * b;
};

// Prompt the user for a number
const userInput = prompt('Enter a number:');
const userNumber = parseInt(userInput, 10);

if (!isNaN(userNumber)) {
  // Create an array of numbers from 1 to userNumber
  const arr2 = Array.from({ length: userNumber }, (_, index) => index + 1);

  // Calculate the factorial using reduce
  const result = arr2.reduce(redu, 1);

  console.log(`The factorial of ${userNumber} is: ${result}`);
} else {
  console.log('Invalid input. Please enter a valid number.');
}
