// Swap Elements of array given index left
// const arr = [1,2,3,4,5,6]
// const swapLeftBy = 2
// output - [3,4,5,6,1,2]
// function getLeftSwappedArrayByIndex(arr, swapLeftBy) - this will return an swapped array with given index


const arr = [1,2,3,4,5,6]

function getLeftSwappedArrayByIndex(arr, swapLeftBy){

    let arr2 = [];
    for( let i = 0; i< arr.length; i++){
        if( arr[i] === swapLeftBy){
            arr2.push(arr[i+=i])
        }
        
    }

    return arr2

}

console.log(getLeftSwappedArrayByIndex(arr, 2));





