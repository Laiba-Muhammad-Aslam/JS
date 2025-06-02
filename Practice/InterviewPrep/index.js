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

// Print the Fibonacci Series up to N terms

function fibonacciSeries(number){
    let prev1 = 0;
    let prev2 = 1;

    console.log(prev1)
    console.log(prev2)
    for(let i=0; i<number; i++){
       let fibonacci = prev1 + prev2;
       console.log(fibonacci)
       prev1 = prev2
       prev2 = fibonacci

    }

}
fibonacciSeries(5)

//  Intermediate Level

// 6. Find the First Non-Repeating Character

function nonRepeatingCharacter(str){
   let charCount = {}

   for(let i =0; i< str.length; i++){
    let char = str[i];
    if(charCount[char]){
        charCount[char]++;
    }else{
        charCount[char] = 1;
    }
   }

   for(let i =0; i<str.length; i++){
    if(charCount[str[i]] === 1){
        return str[i];
    }
   }

    return null; 
}

console.log(nonRepeatingCharacter("aabbcdd"));

// 7. Two Sum Problem

function twoSum(arr, target){
    let map = new Map();

    for(let i=0; i< arr.length; i++){
        let rem = target - arr[i];
        if(map.has(rem)){
            return [map.get(rem) ,i]
    }else{
        map.set(arr[i], i)
    }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 7, 11, 15], 18))

// 8. Sort an Array Without Using sort()

function sortArray(arr){
    for(let i =0; i< arr.length; i++){
        for(let j =0; j< arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}
console.log(sortArray([5, 3, 8, 4, 2]))

// 9. Check if Two Strings Are Anagrams

function checkAnagrams(str1, str2){
    let lengthStr1 = str1.length;
    let lengthStr2 = str2.length;
    

    if(lengthStr1 != lengthStr2){
        return "Not an Anagram"
    }else{
       let checkStr1 = str1.toLowerCase().split("").sort().join("");
       let checkStr2 = str2.toLowerCase().split("").sort().join("");
       console.log(checkStr1, checkStr2)

       if(checkStr1 === checkStr2){
        return "It is an Anagram";
       }else{
        return "It is not an Anagram";
       }
    }
}
console.log(checkAnagrams("listen", "silent"));
console.log(checkAnagrams("Laiba", "Ayesha"));

// 10. Pattern Printing

function pattern(rows, columns){
    for(let i= 1; i<= rows; i++){
        for(let j=0; j< i ;j++){
            process.stdout.write("*")
        }
        console.log("");

    }
}
pattern(3, 3)