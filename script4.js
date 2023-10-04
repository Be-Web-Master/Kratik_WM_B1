// Find frequency of all dublicate elements
// const arr = [1,1,2,3,3,3,4,5,5,5,5]
// function findDublicatesFrequency(arr) - this function will return object with frequency
// output - { 1:2, 3:3, 5:4 }


const arr = [1,1,2,3,3,3,4,5,5,5,5];

function findDublicatesFrequency(arr){
    let output = {} ;

    arr.forEach((x) => {output[x] = (output[x] || 0) + 1 });
    return output;
};

console.log(findDublicatesFrequency(arr));


