// Array Questions

// 1. Reverse an Array

function reverseArray(arr) {
  return arr.reverse();
}

// 2. Find Maximum and Minimum in Array

function findMinMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}

// 3. Check if Array is Palindrome

function isPalindrome(arr) {
  return arr.join('') === arr.reverse().join('');
}

// 4. Remove Duplicates from Array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 5. Find the Second Largest Element

function secondLargest(arr){
  let unique = [...new Set(arr)];
  unique.sort((a,b) => b - a);
  return unique[1];
}

// String Questions
// 6. Reverse a String

function reverseString(str) {
  return str.split('').reverse().join('');
}

// 7. Check if String is Palindrome

function isPalindromeStr(str) {
  return str === str.split('').reverse().join('');
}

// 8. Count Vowels in a String

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// 9. Check Anagram

function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// 10. Capitalize First Letter of Each Word

function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Number & Math Questions

// 11. Check Prime Number

function isPrime(number){
  if(number <= 1) return false;
   for (let i = 2; i <= Math.sqrt(number); i++)
    if (number % i === 0) return false;
  return true;
}
// console.log(isPrime(7));
// console.log(isPrime(10));

// 12. Generate Fibonacci Series

function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) seq.push(seq[i - 1] + seq[i - 2]);
  return seq;
}

// 13. Check Armstrong Number

function isArmstrong(num) {
  let digits = num.toString().split('');
  let sum = digits.reduce((acc, d) => acc + Math.pow(+d, digits.length), 0);
  return sum === num;
}

// 14. Factorial of Number

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

// 15. Greatest Common Divisor (GCD)

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Sorting & Searching
// 16. Binary Search

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// 17. Bubble Sort

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++)
    for (let j = 0; j < len - 1 - i; j++)
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  return arr;
}

// 18. Merge Two Sorted Arrays

function mergeSortedArrays(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}

// 19. Find Missing Number in Sequence

function findMissing(arr){
  let n = arr.length + 1;
  let total = (n * (n+1)/2);
  let sum = arr.reduce((acc, val) => acc + val, 0);
  return total - sum;
}

// 20. Find First Non-Repeating Character

function firstNonRepeatingChar(str) {
  for (let char of str)
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  return null;
}

// Object & Map Questions

// 21. Count Occurrences of Elements

function countOccurrences(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

// 22. Group Anagrams

function groupAnagrams(words) {
  const map = {};
  for (let word of words) {
    let key = word.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(word);
  }
  return Object.values(map);
}

// 23. Flatten Nested Object

function flattenObject(obj, prefix = '', res = {}) {
  for (let key in obj) {
    let newKey = prefix ? `${prefix}.${key}` : key;
    typeof obj[key] === 'object' && !Array.isArray(obj[key])
      ? flattenObject(obj[key], newKey, res)
      : res[newKey] = obj[key];
  }
  return res;
}

// 24. Deep Clone Object

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 25. Check if Two Objects are Equal

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Recursion Questions
// 26. Sum of Array Elements

function sumOfArrayElements(arr){
  let sum = 0;
  if(arr.length === 0){
    return 0;
  }else{
    for(let i=0; i<arr.length; i++){
      sum+=arr[i]
    }
    return sum;
  }
}
console.log(sumOfArrayElements([10, 20, 5]));

// 27. String Permutations

function getPermutations(str) {
  if (str.length <= 1) return [str];
  let perms = [];
  for (let i = 0; i < str.length; i++) {
    let rest = str.slice(0, i) + str.slice(i + 1);
    for (let subPerm of getPermutations(rest)) perms.push(str[i] + subPerm);
  }
  return perms;
}

// 28. Power of a Number

function power(base, exp) {
  return exp === 0 ? 1 : base * power(base, exp - 1);
}

// 29. Fibonacci using Recursion

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// 30. Sum of Digits

function sumDigits(n) {
  return n === 0 ? 0 : (n % 10) + sumDigits(Math.floor(n / 10));
}

// Other Logical & Utility Questions

// 31. Check Power of Two

/*
What does "Power of Two" mean?
A number is a power of two if it can be written as: 2^0 = 1, 2^2 = 4, 2^3 = 8, 2^4= 16....
So, examples of powers of two are:
1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024,....
*/

function checkPowerOfTwo(num){
  if( num<=0 ) return false;

  while ( num%2 === 0){
    num = num / 2;
  }
  return num === 1;
}
console.log(checkPowerOfTwo(1));
console.log(checkPowerOfTwo(2));
console.log(checkPowerOfTwo(3));
console.log(checkPowerOfTwo(8));
console.log(checkPowerOfTwo(10));

// 32. Rotate Array

// function rotateArray(arr, k){
//   let reverseArr = arr.reverse();
//   let remaining = reverseArr.slice(3,).reverse()
//   let newArr = reverseArr.slice(0,3).reverse()
//   let finalArr = [...newArr, ...remaining]
//   console.log(reverseArr, newArr, finalArr)
// }

// rotateArray([1, 2, 3, 4, 5, 6, 7], 3)

function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}