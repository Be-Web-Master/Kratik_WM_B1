// Given an integer x, return true if x is a palindrome
// , and false otherwise.


let integer= 121;

function palindrome(integer){

    let int= (integer).toString()
    let output = "";
    for(let i=int.length-1; i>=0; i--){
        output = output + int[i];
    }

    if(int === output){
        return true;
    }

    else {
        return false
    }

};


console.log(palindrome(integer));

// console.log((integer).toString().length);