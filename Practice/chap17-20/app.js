// ARRAYS AND LOOP

// QUESTION # 1 

var multiarr = [[], [], []];

// QUESTION # 2

multiarr[0][0] = 0;
multiarr[0][1] = 1;
multiarr[0][2] = 2;
multiarr[0][3] = 3;
multiarr[1][0] = 1;
multiarr[1][1] = 0;
multiarr[1][2] = 1;
multiarr[1][3] = 2;
multiarr[2][0] = 2;
multiarr[2][1] = 1;
multiarr[2][2] = 0;
multiarr[2][3] = 1;

for(var i = 0; i< multiarr.length; i++){
    console.log(multiarr[i]);
}

// QUESTION # 3 

for(var i=1; i<=10; i++){
    console.log(i);
}

// QUESTION # 4 

var table = +prompt("Enter a number to show its multiplication table: ");
var tableLength = +prompt("Enter length of multiplication table: ");
console.log(`Multiplication table of ${table} Length ${tableLength}`);

for(var i=1; i<=tableLength; i++){
    console.log(`${table} x ${i} = ` + table * i);
}