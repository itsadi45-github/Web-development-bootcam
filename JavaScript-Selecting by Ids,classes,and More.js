console.log("aditya");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "orange"
// boxes[4].style.backgroundColor  = "blue"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"

console.log(document.querySelectorAll(".box")); 

document.querySelectorAll(".box").forEach(e =>{
    // console.log(e);
    e.style.backgroundColor = "yellowgreen"
})
/*
NodeList(7) [div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box]
document.getElementsByTagName
ƒ getElementsByTagName() { [native code] }
document.getElementsByTagName("div")
HTMLCollection(8) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box, redbox: div#redbox.box]
0
: 
div.container
1
: 
div.box
2
: 
div.box
3
: 
div.box
4
: 
div#redbox.box
5
: 
div.box
6
: 
div.box
7
: 
div.box
redbox
: 
div#redbox.box
length
: 
8

e = document.getElementsByTagName("div")


HTMLCollection(8) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box, redbox: div#redbox.box]

e[4].matches("#redbox")
true

e[3].matches("#redbox")
false

e[3].closest("#redbox")
null

e[3].closest(".container")
<div class=​"container">​…​</div>​

e[3].closest("html")
<html lang=​"en">​<head>​…​</head>​<body>​…​</body>​<div class=​"container">​<div class=​"box" style=​"background-color:​ yellowgreen;​">​Aditya Sarraf 1​</div>​flex<div class=​"box" style=​"background-color:​ yellowgreen;​">​Aditya Sarraf 1.5​</div>​flex<div class=​"box" style=​"background-color:​ yellowgreen;​">​Aditya Sarraf 2​</div>​flex<div id=​"redbox" class=​"box" style=​"background-color:​ yellowgreen;​">​Aditya Sarraf 2.5​</div>​flex<div class=​"box" style=​"background-color:​ yellowgreen;​">​Aditya Sarraf 3​</div>​flex<div class=​"box" style=​"background-color:​ yellowgreen;​">​Aditya Sarraf 4​</div>​flex<div class=​"box" style=​"background-color:​ yellowgreen;​">​Aditya Sarraf 5​</div>​flex</div>​<script src=​"JavaScript-Selecting by Ids,classes,and More.js">​</script>​<!-- Code injected by live-server --><script>​…​</script>​</body>​</html>​

document.querySelector(".container").contains(e[2])
true

document.querySelector(".container").contains(e[0])
true

document.querySelector(".container").contains(document.querySelector("body"))
false

document.querySelector("body").contains(document.querySelector(".container"))
true

*/