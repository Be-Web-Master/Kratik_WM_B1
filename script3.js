// "3. Create a function to check if the elements on odd index is an odd number
// const arr = [0,11,4,3,6]
// function checkOddIndexNumber(arr) - 
// this function will return true if all elements in odd index are odd numbers.


const arr1 = [0,11,2,3,4];

function checkOddIndexNumber(arr){
    let result = false;
    for(let i=0; i < arr.length; i++){
        if(i%2!==0 && arr[i]%2!==0){
            
                result = true;
        
        }
    }

    return result;
};


console.log(checkOddIndexNumber(arr1));


