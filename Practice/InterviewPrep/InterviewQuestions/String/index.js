// 2. Reverse a String / Reverse Words in a String

function resverseString(str){
    let reverseStr = '';

    for(let i=str.length-1; i>=0; i--){
        reverseStr+= str[i]
    }
    return reverseStr;
}
console.log(resverseString("Laiba"))

// 3. Check if String is Palindrome

function checkPalindrom(str){

    let userStr = str.toLowerCase();
    let reverseStr = "";
    for (let i = userStr.length-1; i >= 0; i--) {
        reverseStr+=userStr[i];
    }
    if(reverseStr == userStr){
        console.log("Palindrome");
    }else{
        console.log("Not a Palindrome");
    }
}

checkPalindrom("Laiba");
checkPalindrom("ala");