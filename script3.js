// Implement Bubble Sort
// const arr = [11,4,6,14,2,51,1]
// output - [1,2,4,6,11,14,51]
// function bubbleSort(arr) - this function will return sorted array


const arr = [11,4,6,14,2,51,1]
// output - [1,2,4,6,11,14,51]

function bubbleSort(arr){
    let output = [];

    for(let i = 0; i<arr.length; i++){
        for( let j= 0; j < (arr.length -i); i++){
            if(arr[i]< arr[j]){
                output.push(arr[i]);     
            }
        }
    }

    return output;
}

console.log(bubbleSort(arr));

