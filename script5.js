// Move all negative numbers to beginning.
// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

const input = [9,-12, 11, -13, -5, 6, -7, 5, -3, -6]


function toBegining(arr){
    let arr1=[];
input.forEach((obj)=>{
        if (obj< 0){
            arr1.push(obj);
        }
    })

    input.forEach((obj)=>{
        if (obj>0){
            arr1.push(obj);
        }
    })

    return arr1
};

console.log(toBegining(input));



