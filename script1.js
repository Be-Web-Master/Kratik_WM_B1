// If the same number is repeated 3 times in the consecutive locations, count that number
// const arr = [ 11,13,13,13,13,4,4,3,2,13,2,2,2 ]
// output - 3
// function getConsecutiveSameNumCount(arr) - this function will return a number
// explanation -
// 13, 13, 13 - 1
// 13, 13, 13 - 2
// 2, 2, 2 - 3


const arr = [ 11,13,13,13,13,4,4,3,2,13,2,2,2 ];

function getConsecutiveSameNumCount(arr){

    let count=[];
    


    for(let i = 0; i< arr.length; i++){

        if( arr[i]=== arr[i+1] && arr[i] === arr[i+2]){
            count.push(arr[i])
        }
    }
    let output = count.length;

    return output;
    

};


console.log(getConsecutiveSameNumCount(arr));


