// Length of the Longest Substring 

var lengthOfLongestSubstring = function (s) {
    let longestStringLength = 0;

    for (let i = 0; i < s.length; i++) {
        let currentStringSet = new Set();

        for (let x = i; x < s.length; x++) {
            if (currentStringSet.has(s[x])) {
                break;
            } else {
                currentStringSet.add(s[x]);
            }
        }

        longestStringLength = Math.max(
            longestStringLength,
            currentStringSet.size
        );
    }

    return longestStringLength;
};

// Reverse a String

function reverseString(str){
    let reverseStr = ""

    for(let i = str.length - 1; i>=0; i--){
        reverseStr+= str[i]
        console.log(str[i])
    }
    return reverseStr;
}
console.log(reverseString("Laiba")) // abiaL

// Count Vowels in a String

function countVowels(str){
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0

    let userString = str.toLowerCase();

    for(let i = 0; i<= userString.length - 1; i++){
        if(vowels.includes(userString[i])){
            // console.log("Vowel Spotted")
            count++;
        }
    }
    // console.log("yeahhh")
    return count;
}
console.log(countVowels("Laiba"));

// Check for Palindrome

function palindrome(str){
    let userString = str.toLowerCase();
    let palindromestr = ""

    for(let i = userString.length - 1; i>=0; i--){
        palindromestr+= userString[i];
    }
    
    if(palindromestr === userString){
        return "It is a Palindrome";
    }else{
        return "It is not a Palindrome"
    }
}
console.log(palindrome("Laiba"));
console.log(palindrome("Madam"));

// Find the Maximum Number in an Array

function maxNumInArr(arr){
    let userArr = arr
    let maxNumber = arr[0];

    for(let i = 0; i<= arr.length -1 ; i++){

        if(arr[i] >= maxNumber){
            maxNumber = arr[i]
            // console.log(maxNumber)
        }
    }
    return maxNumber
}
console.log(maxNumInArr([10, 5, 20, 8]));
console.log(maxNumInArr([-5, -10, -2]));