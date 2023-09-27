// "3. Create a function to check if the elements on odd index is an odd number
// const arr = [0,11,4,3,6]
// function checkOddIndexNumber(arr) - 
// this function will return true if all elements in odd index are odd numbers.


const arr1 = [0,2,3,3,5];

function checkOddIndexNumber(arr){
    let result = true;
    for(let i=1; i < arr.length; i++){
        if(i%2!==0 && arr[i]%2===0){
                result = false;
        }
        
    } 
    return result;
};

console.log(checkOddIndexNumber(arr1));


