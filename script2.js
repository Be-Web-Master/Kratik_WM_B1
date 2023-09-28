// Find the majority element in the array
// function findMajorityElement(arr) - this function will return first majority element from an array
// const arr= [3, 3, 4, 2, 4, 4, 2, 4, 4]
// output - 4

// const arr = [1,1,1,3,3,3,2,2]
// output - 1




const arr= [3, 3, 4, 2, 4, 4, 2, 4, 4]


function findMajorityElement(arr){

    let arr2 = []

    for(let i =0; i< arr.length; i++){
        
        if(arr[i] === arr[i+1]){
            count(arr[i]);
        }

    }

}
