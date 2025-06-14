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