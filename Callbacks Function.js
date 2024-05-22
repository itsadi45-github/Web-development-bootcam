/* Asychronous Actions */
console.log("aditya is a hacker");
console.log("sulav is a hecker");


setTimeout(() => {
    console.log("I am inside settimeout");
}, 2000);
setTimeout(() => {
    console.log("I am inside settimeout 2nd content");
}, 0);

console.log("The End");

/* Callback Functions */

const callback = (arg) => {
    console.log(arg)
}


const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Aditya")
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)