console.log("Hello i am Aditya");
// lists of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#events   link MDN

let button = document.getElementById("btn")
/*
button.addEventListener("click", ()=>{
    // alert("I was Clicked. Yayy!")
    document.querySelector(".box").innerHTML = "<b> Yayy You were Clicked</b> Enjoy Your Click! "
})
*/
// dblEvent
// button.addEventListener("dblclick", ()=>{
//     // alert("I was Clicked. Yayy!")
//     document.querySelector(".box").innerHTML = "<b> Yayy You were Clicked</b> Enjoy Your Click! "
// })

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right Click please")
  
})


// KeyboardEvent
document.addEventListener("keydown", (e)=>{
    // alert("Dont hack us by Right Click please")
     console.log(e, e.key, e.keyCode );
    //  console.log(e);
})