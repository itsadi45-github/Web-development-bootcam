// let obj = {
//     a:1,
//     b:"Aditya"
// }
// console.log(obj);

// let animal = {
//     eats: true

// };

// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__=animal; //sets rabbit.[[Prototype]]=animal

/*
{a: 1, b: 'Aditya'}
rabbit
{jumps: true}jumps: true[[Prototype]]: Objecteats: true[[Prototype]]: Object
rabbit.eats
true
 */

class Animal {
    constructor(name) {
        this.name = name
        console.log('Object is Created...');

    }

    eats() {
        console.log('Kha raha hoon');

    }
    jumps() {
        console.log('Kood raha hoon');

    }
}
 
class lion extends Animal{
      constructor(name) {
        super(name)
        console.log('Object is Created and here is a lion...');

    }
    
    eats() {
        super.eats()
        console.log('Kha raha hoon oihoi ayehai badobadi badobadi');

    }
}

let a = new Animal("World");
console.log(a);

let l = new lion("Shera")
console.log(l);
/* 
Object is Created...
script.js:43 Animal {}
a.eats()
script.js:33 Kha raha hoon
a.jumps()
script.js:37 Kood raha hoon

l instanceof lion
true
l instanceof Animal
true

a instanceof lion
false
a instanceof Animal
true
*/