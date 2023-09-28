// Find a peak element which is not smaller than its neighbours
// function findPeakElement(arr) - this function will return peak element
// peak element is a elements which is greater than its neighbours

// const arr= [5, 10, 20, 15]
// output - 20, bcoz 20 is greater than its neighbours

// const arr = [1,2,3,4,5]
// output - 5
// 5 is greater than its left neightbour and we don't have any element on right of 5



// const arr= [5, 10, 20, 15]

const arr = [1,2,3,4,5]

function findPeakElement(arr){

    let num = 0;

    for(let i =0 ; i < arr.length; i++){
        if( arr[i]>arr[i-1] && arr[i]> arr[i+1] || arr[i]> arr[i-1]){
            num = arr[i];
        }
    }
    return num;
}


console.log(findPeakElement(arr));
