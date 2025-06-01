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