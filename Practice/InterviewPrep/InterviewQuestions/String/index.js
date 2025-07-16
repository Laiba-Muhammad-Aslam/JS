// 2. Reverse a String / Reverse Words in a String

function resverseString(str){
    let reverseStr = '';

    for(let i=str.length-1; i>=0; i--){
        reverseStr+= str[i]
    }
    return reverseStr;
}
console.log(resverseString("Laiba"))