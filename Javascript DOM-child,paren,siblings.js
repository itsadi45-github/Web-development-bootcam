console.log("Hello world")
/*
document.body.childNodes
NodeList(9) [text, div.container, text, script, text, comment, text, script, text]

document.body.childNodes[0]
#text

document.body.childNodes[1]
<div class=​"container">​…​</div>​

document.body.childNodes[1].childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

let cont = document.body.childNodes[1]
undefined

cont
<div class=​"container">​…​</div>​

cont.firstChild
#text

cont.lastChild
#text

cont.firstElementChild
<div class=​"box">​Box1​</div>​

cont.lastElementChild
<div class=​"box">​Box5​</div>​

cont.firstElementChild.style.color='green';
'green'

cont.lastElementChild.style.color='blue';
'blue'

cont.lastElementChild.style.backgroundColor='yellow';
'yellow'

document.body.firstElementChild
<div class=​"container">​…​</div>​

document.body.firstElementChild.childNodes
NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

document.body.firstElementChild.children[1]
<div class=​"box">​Box2​</div>​

document.body.firstElementChild.children[0]
<div class=​"box">​Box1​</div>​

document.body.firstElementChild.children[3]
<div class=​"box">​Box4​</div>​

document.body.firstElementChild.children[1]
<div class=​"box">​Box2​</div>​


document.body.firstElementChild.children[0]
<div class=​"box">​Box1​</div>​


document.body.firstElementChild.children[3]
<div class=​"box">​Box4​</div>​


document.body.firstElementChild.children[3].nextElementSibling
<div class=​"box">​Box5​</div>​

document.body.firstElementChild.children[3].previousElementSibling
<div class=​"box">​Box3​</div>​

document.body.firstElementChild.children[3].previousSibling
#text

document.body.firstElementChild.children[3].nextSibling
#text

document.body.firstElementChild.children[3].parentElement
<div class=​"container">​…​</div>​

document.body.children
HTMLCollection(4) [div.container, script, table, script]

document.body.children[2]
<table>​…​</table>​

document.body.children[2].rows
HTMLCollection(2) [tr, tr]

document.body.children[2].rows
HTMLCollection(2) [tr, tr]
*/
