let arr = [1, 2, 3, 4, 5, 7]
//   Index 0, 1, 2, 3, 4, 5

arr[0] = 8756
/*
console.log(arr, typeof arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
*/
// We can convert array to string like this 
console.log(arr.toString())
console.log(arr.join(" and "))

/*
Down on the webpage inside console

8756,2,3,4,5,7
Javascript Arrays.js:14 8756 and 2 and 3 and 4 and 5 and 7
a = [1, 2, 3, 4, 5, 6]
(6) [1, 2, 3, 4, 5, 6]
a.p
undefined
a.pop
ƒ pop() { [native code] }
a.pop()
6
a
(5) [1, 2, 3, 4, 5]
a.pop(2)
5
a
(4) [1, 2, 3, 4]
a.push(120)
5
a
(5) [1, 2, 3, 4, 120]
a.push(130)

6
a
(6) [1, 2, 3, 4, 120, 130]
a.pus
undefined
a.push("aditya")
7
a
(7) [1, 2, 3, 4, 120, 130, 'aditya']
a.shift()
1
a
(6) [2, 3, 4, 120, 130, 'aditya']
a.unshift()
6
a
(6) [2, 3, 4, 120, 130, 'aditya']
a.unshift("adi")
7
a
(7) ['adi', 2, 3, 4, 120, 130, 'aditya']
 
delete a[6]
true
a
(6) [1, 2, 3, 4, 5, 6]
delete a[2]
true
a
(6) [1, 2, empty, 4, 5, 6]
a
(6) [1, 2, empty, 4, 5, 6]
a.length

let a = [1,2,3,4,5]
undefined
let b = [6,7,8]
undefined
let c = [9,10]
undefined

a.concat(b,c)
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let adi = [5,2,4,1,6,8,7]
undefined
adi.sort()
(7) [1, 2, 4, 5, 6, 7, 8]

let numbers = [1,2,3,4,5]
undefined
numbers.splice(1,2)
(2) [2, 3]
numbers
(3) [1, 4, 5]let aditya=[1,2,3,4,5]
undefined
aditya.splice(0,2)
(2) [1, 2]
numbers
[5]
aditya
(3) [3, 4, 5]
let aditya=[1,2,3,4,5]

undefined
aditya.splice(1,3,333,444,555)
(3) [2, 3, 4]
aditya
(5) [1, 333, 444, 555, 5]
 
let num=[1,2,3,4,5,6]
undefined
num.slice(2)
(4) [3, 4, 5, 6]
num
(6) [1, 2, 3, 4, 5, 6]
num.slice(1)
(5) [2, 3, 4, 5, 6]
num
(6) [1, 2, 3, 4, 5, 6]
let adi=[23,45,667,34]
undefined
adi.slice(1,3)
(2) [45, 667]
adi
(4) [23, 45, 667, 34]
*/