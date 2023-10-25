// Given two strings s and goal, return true if and only if s can become goal after some number of
// shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

let s = "abcde", goal = "abced"

function shift(s , goal){

    let arr1 = s.split("");
    let arr2 = goal.split("");
    let output = false;

    for(let i = 0 ; i<s.length; i++){
     let val = arr1.splice(0,1)
    arr1.push(val[0])
     if(arr1[i]=== arr2[i]){
        output = true;
     }

    }

    return output
}


console.log(shift(s , goal));


    // let arr1 = s.split("");
    // let arr2 = goal.split("");
    // let val = arr1.splice(0,1);
  
   

    // arr1.push(val[0]);

    // console.log(arr1);
    




