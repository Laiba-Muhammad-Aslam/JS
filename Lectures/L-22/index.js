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
if (areBracketsBalanced(input))
    document.write("Balanced ");
else
    document.write("Not Balanced ");

