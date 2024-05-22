
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }
let a = [1, 93, 5, 6, 88]

a.forEach((value, index, arr) => {
    console.log(value, index, arr)
})
/*
this are the output

value , index ,        array 
 1        0      (5) [1, 93, 5, 6, 88]
93        1      (5) [1, 93, 5, 6, 88]
 5        2      (5) [1, 93, 5, 6, 88]
 6        3      (5) [1, 93, 5, 6, 88]
88        4      (5) [1, 93, 5, 6, 88]
*/

// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
//     }
// }
// value = Iterator both used for same things 

for (const value of a) {
    console.log(value)
}
