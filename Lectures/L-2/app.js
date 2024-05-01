var a = "Hello World!";

document.write("<h1>" + a + "</h1>");

alert("10" - 2);
alert(10%3);

var num = 10;
alert(num);
num++;
alert(num);
num--;
alert(num);

// post increment vs pre increment

var n1 = 10;
alert(++n1);
alert(n1++);

var num = 2 + 2 * 4 - 5 * 2;
alert(num);

var num = (2 + 2) * 4 - 5 * 2;
alert(num);

var a = 2;
var b = 3;

var eq = (a++ + --b) - b++ - --a * a++;
    //   (2   +  2)  -  2  -  2  *  2;
alert(eq);
// console.log(a++ , --b , b++ ,--a , a++);

console.log(((2+2)*2)-2*2);