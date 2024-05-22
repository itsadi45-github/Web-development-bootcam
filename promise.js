console.log('Hey i am aditya');
console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random numbe was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log('Yes I a done');
            resolve("Aditya")
        }, 3000);
    }
})

/* promise API */
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random numbe was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log('Yes I a done 2');
            resolve("Aditya 2")
        }, 1000);
    }
})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random numbe was not supporting you 3")
    }
    else {
        setTimeout(() => {
            console.log('Yes I a done 3');
            resolve("Aditya 3")
        }, 2000);
    }
})
// let p3=Promise.race([prom1,prom2])
// p3.then((a) => {
//   console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

// let p3=Promise.allSettled([prom1,prom2])
// p3.then((a) => {
//   console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

let p3=Promise.all([prom1,prom2,prom3])
p3.then((a) => {
  console.log(a)
}).catch((err) => {
    console.log(err)
})

/* 
prom1.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})
*/





