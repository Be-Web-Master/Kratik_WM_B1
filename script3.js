// Find the elements the divides the sum of all elements
// const arr = [1,2,3,4,5]
// output - [1, 3, 5]
// function findDivisibleElements(arr) - this function will return the array of elements

// eg - sum = 1 + 2 + 3 + 4 + 5 = 15
// 1, 3 and 5 divides 15 completely

const arr = [1,2,3,4,5]

function findDivisibleElements(arr){

    let sum = 0;
    let output = [];

    for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i]; 
        if(sum% arr[i]=== 0){
            output.push(arr[i])
        }
    }
    return output;
};


console.log(findDivisibleElements(arr));

