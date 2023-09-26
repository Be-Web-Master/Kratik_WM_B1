
// Create a function to remove dublicate elements
// const arr = [1,1,1,2,2,3,4,5,6,6,5]
// function removeDublicates(arr) -> return an array of unique elements - [1,2,3,4,5,6]

const arr = [1,1,1,2,2,3,4,5,6,6,5]

function removeDublicates(arr){
    const set = new Set();
    for( let i=0; i<arr.length; i++){
        set.add(arr[i]);
    }
    return set;
}

console.log(removeDublicates(arr));



function removeDublicates2(arr){

    let result=[];

    for( let i = 0 ; i< arr.length; i++){
        if(arr[i] !== arr[i+1]){
            result.push(arr[i])
        }
    }
    return result;
};

console.log(removeDublicates2(arr));


