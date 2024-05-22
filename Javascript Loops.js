console.log("I am a tutorial on loops")

let a=1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for loop is here 
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
 // key : element
    name: "harry",
    role: "Programmer",
    company: "codewithAdi AI"
}
// for_in loop is from here
for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
    
}
for (const key in obj) {
        console.log(key)
    
}

// for_of loop is here 
for (const char of "AdityaSarraf") {
    console.log(char)
}
// while loop is from here 
// i=5;
/*
i = 0;
while (i<6) {
    console.log(i)
    i++;
}
*/
// do while is from here 
i = 10;
do {
    console.log(i)
    i++;
} while (i<6);