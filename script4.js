// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

let nums = [1,0,1,1,0,1]


function bin(nums){

    let ind = [];
    let max = 0;
    let tempMax = 0;
    nums.map(number =>{
        if(number === 1){
            tempMax += 1;
        }else{
            max = Math.max(max, tempMax);
            tempMax = 0;
        }
    })
    return Math.max(max, tempMax);
};


console.log(bin(nums));