// Two Sum

function twoSum(arr, target){
    let n = arr.length;

    for(let i=0; i<n ; i++){

        for(let j = 1; j<n; j++){
            if(arr[i] + arr[j] === target){
                return [i, j];
            }
        }
    }
    return "No two sum found"
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([7,11,2,15], 9));

// OR 

function twoSum(arr, target){
    let mp = new Map();

    for(let i=0; i<arr.length; i++){
        let rem = target - arr[i];
        if(mp.has(rem)){
            return [mp.get(rem), i];
        }else{
            mp.set(arr[i], i);
        }
    }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([7,11,2,15], 9));

// 2. Product of Array Except Self

