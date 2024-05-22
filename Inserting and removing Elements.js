/*
document.querySelector(".container").innerText
'Hey i am a box!\nHey i am a box!'

document.querySelector(".container").innerText
'Hey i am a box!\nHey i am a box!'
'Hey i am a box!\nHey i am a box!'

document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">Hey i am a box!</div>\n        <div class="box">Hey i am a box!</div>\n    </div>'

document.querySelector(".container").tagName
'DIV'

document.querySelector(".container").nodeName
'DIV

document.querySelector(".container").textContent
'\n        Hey i am a box!\n        Hey i am a box!\n  

document.querySelector(".container").hidden
false

document.querySelector(".container").hidden = true
true

document.querySelector(".box").innerHTML = "Hey i am aditya"
'Hey i am aditya'

document.querySelector(".box").hasAttribute("style")
true

document.querySelector(".box").getAttribute("style")
'display: flex;'

document.querySelector(".box").setAttribute("style", "display:inline")
undefined

document.querySelector(".box").attributes
NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

document.querySelector(".box").removeAttribute("style")
undefined

document.designMode = "on" (you can design any website with help of this)
'on'

document.querySelector(".box").dataset
DOMStringMap {createdby: 'Aditya', conceptby: 'Ranjan'}

document.querySelector(".box").remove()
undefined

document.querySelector(".box").remove()
undefined

document.querySelector(".container").classList
DOMTokenList(3) ['container', 'red', 'bggreen', value: 'container red bggreen']0: "container"1: "red"2: "bggreen"length: 3value: "container red bggreen"[[Prototype]]: DOMTokenList

document.querySelector(".container").className
'container red bggreen'

document.querySelector(".container").classList.add("aditya")
undefined

document.querySelector(".container").classList.remove("aditya")
undefined


document.querySelector(".container").classList.remove("red")
undefined

document.querySelector(".container").classList.replace("bggreen","yellow")
true


document.querySelector(".container").classList.toggle("red")
false


document.querySelector(".container").classList.toggle("red")
true
*/






