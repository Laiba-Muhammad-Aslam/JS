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