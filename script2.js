// Implement Quick Sort
// const arr = [5,3,4,6,11,2,1]
// output - [1,2,3,4,5,6,11]
// function quickSort(arr) - this function will return an sorted array in ascending order


const arr = [5,3,4,6,11,2,1];

function quickSort(arr){
    let arr2 = []; 
    for(let i=0; i< arr.length; i++){

        if(arr[i]>arr[i+i]){
            arr2.push(arr[i]);
        }
    }

    return arr2;

};


// console.log(quickSort(arr));




