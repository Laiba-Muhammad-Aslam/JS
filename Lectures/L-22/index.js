var input = "{([])}";

var arr = [];

for(var i = 0; i < input.length; i++){
    if(input[i] === "{" || input[i] === "(" || input[i] === "["){
        arr.push(input[i])
    }
}
console.log(arr);

function isBalanced(input){
    var stack = [];

    for(var i= 0; i < input.length; i++){
        let x = input[i];
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
        }
        if (stack.length == 0){
            return false;
        }

        var check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;

        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;

        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    return (stack.length == 0);
}

var input = "([{}])";
if (isBalanced(input))
    document.write("Balanced ");
else
    document.write("Not Balanced ");




console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]);

// 1 --> Element
// 3 --> Junk Artifact

console.log(document.childNodes[1].childNodes[0].childNodes[1].nodeType)
console.log(document.childNodes[1].childNodes[0].childNodes[2].nodeType)

// FIRST CHILD AND LAST CHILD 

console.log(document.childNodes[1].firstChild)
console.log(document.childNodes[1].lastChild)

console.log(document.childNodes[1].parentNode)


// function removeElement(){
//     var text = document.getElementById("text")
//     text.remove()
// }

function removeElement(event){
    // console.log()
    event.target.parentNode.childNodes[1].remove();
}