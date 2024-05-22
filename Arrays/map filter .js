let arr = [1,2,5,3,6,77,4];
// let newArr= [];
// this is longcut
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**3)
// }
// console.log(newArr)

// here is the shorcut way 

let newArr = arr.map((e,index,array)=>{
    return e**2
    // return e*2
    // return e+2
})
console.log(newArr)
 
const greaterthanSeven=(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterthanSeven))
//  this will print greater than Seven number 

let arr2=[1,2,3,4,5,6]

const redu = (a,b)=>{
    return a*b
}
 console.log(arr2.reduce(redu))


//  any string can be converted to array

//  Array.from("aditya")

// (6) ['a', 'd', 'i', 't', 'y', 'a']