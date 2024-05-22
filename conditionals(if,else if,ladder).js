console.log("hello i am conditional tutorial")

let age=3;
let grace=2;

//1.Arthmetic operators
console.log("your age is:",age + grace);
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace) //it means 3 to the power 2 so the output is 9
console.log(age % grace) // used for the remainder after division


if(age+grace>18){ 
    console.log("So,You Can Drive");
}
else{
    console.log("So,You Can't Drive");
}
//2.assignment operators
age += grace;
// age -= grace;
// age *= grace;
// age /= grace;
// age **= grace;
// age %= grace;
 console.log(age);

// 3.Comparison operators
let size = 8;
//we Can't use Single Equal to(=) sign.
if(size==18){ 
    console.log("This is true");
}
else{
    console.log("This is False");
}
if(size!=18){ // this is used for not equalto.
    console.log("This is false");
}
else{
    console.log("This is True");
}
// > 34+34
// 68
// > "45"==45
// true
// > "56"===56
// false
// > "45"==="45"
// true
// > !false
// true
// > !true
// false
// > a=5
// 5
// > b=89
// 89
// > c!=34
// Uncaught ReferenceError: c is not defined
// > a!=b
// true
// > a!=b && b!=a
// true
// > a!=b || b==a
// true

// .ladder
let amount=1;

if(amount==18){ 
    console.log("you can pay");
}
else if(amount==0){
    console.log("Are you kiding?")
}
else if(amount==1){
    console.log("Are you again kiding?")
}
else{
    console.log("you cant pay")
}
/*
> 5+6
11
> a=5+6
11
> a=4
4
> b=6
6
> c=a>b?(a-b):(b-a)
2
>  c=a<b?(a-b):(b-a)
-2*/

 a=4;
 b=8;
 let c = a > b ? (a-b) : (b-a);
/*
 translates to:
    if(a>b){
        let c = a - b;
    }
    else{
        let c = a + b;
    }
 */