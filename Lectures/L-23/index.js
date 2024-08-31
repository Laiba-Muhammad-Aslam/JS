// var box = document.getElementById("box");
// console.log(box.nodeName);
// console.log(box.nodeValue);

// ATTRIBUTES 

// console.log(box.hasAttribute("class"));
// console.log(box.getAttribute("class"));

// box.setAttribute("class", "main")
// box.setAttribute("class", "main box")

// console.log(box.attributes);

// CREATING AN ELEMENTS 

// var div = document.createElement("div");
// var h1 = document.createElement("h1");
// var span = document.createElement("span");
// var text1 = document.createTextNode("Hello");
// var text2 = document.createTextNode("World");
// div.setAttribute("id", "box");
// div.setAttribute("class", "main");
// h1.appendChild(text1);
// span.appendChild(text2);
// div.appendChild(h1);
// div.appendChild(span);
// console.log(div);
// var main = document.getElementById("main");
// main.appendChild(div);


var main = document.getElementById("main");
main.innerHTML = `   <div id="box" class="main">
        Hello <span>World</span>
    </div>`