// Second Largest Element in an Array

/*
Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.
Note: If the second largest element does not exist, return -1.
*/

function secondLargestElement(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    let secondMax = -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < max && arr[i] > secondMax){
            secondMax = arr[i]
        }
    }
    return secondMax
}

console.log(secondLargestElement([12, 35, 1, 10, 34, 1])); 
console.log(secondLargestElement([10, 5, 10]));            
console.log(secondLargestElement([10, 10, 10]));  