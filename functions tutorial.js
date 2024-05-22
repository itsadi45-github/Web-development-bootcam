console.log("Hey this is tutorial of functions")
function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your doing good course!")

}

// nice("Binit")
nice("Aditya")
// nice("Ayuush")
// nice("Sandeeep")
// nice("Ritek")

function sum(a, b, c=5) {
    // console.log(a + b + c)
    return a + b + c // for the result we have to put return and give the value of a and b which javascript automatically knows that the value of a is 3 and b is 5
}
result1 = sum(370, 5)
result2 = sum(34, 5)
result3 = sum(3, 50,)

console.log("The sum of those number is:", result1)
console.log("The sum of those number is:", result2)
console.log("The sum of those number is:", result3)
 
const func1 = (a, b)=>{
    console.log("i am an arrow function", a, b)
}
func1(34, 23);
func1(99, 55);
func1(44, 56);

// console.log("Hey aditya you are nice!")
// console.log("Hey aditya you are good!")
// console.log("Hey aditya your tshirt is nice!")
// console.log("Hey aditya your doing good course!")