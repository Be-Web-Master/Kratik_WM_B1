// Implement Insertion Sort in ascending order
// const arr = [10,8,5,2,11,15,13,19,12]
// output - [ 2,5,8,10,11,12,13,15,19 ]
// function insertionSort(arr) - this function will return sorted Array


const arr = [10,8,5,2,11,15,13,19,12]


function insertionSort(arr){

    let output = [];
    for(let i = 0; i < arr.length; i++){
         if( arr[i]> arr[i+1]){
            output.push(arr[i+1]);
            arr.splice(arr[i]);
         }
    }

    return output;

};

console.log(insertionSort(arr));

