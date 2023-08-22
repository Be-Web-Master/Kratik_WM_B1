// Count the occurrences of a value in an array
// — create a function that takes 2 args: arr, value
// — this function returns a number, that is count of number of times the value has appeared in arr

// let arr1= [1,2,3,4,5,5,5,6]

// function fun(arr, val) {
//     let count = 0;

//     for ( let i = 0; i< arr.length; i++){
//         if ( val=== arr[i]){
//             count++
//         }

//     }
//     return count;
//     };


//     console.log(fun(arr1, 5));



// let arr1 = [1, 2, 3, 4, 5, 5,0,0, 5, 6]


// function fun2(arr, val) {
//     count = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (val === arr[i]) {
//             count.push(i)
//         }
//     }
//     return count;
// };

// console.log( fun2(arr1,5));

// function funfor( arr , val){
//     let count = [];
//     arr.forEach((element, val) => {
//        if( element === arr[val]){
//         count.push(val)
//        }

//     })
//     return count
// };


// console.log(funfor(arr1,5));


// 3.Get the unique values of an array
// — create a function that takes 2 args: arr
// — this function returns a new array of values from arr, only those which occur only once in that array

// let arr1 = [1, 2, 3, 4, 5, 5,0,0,9,8,88, 5, 6]
// function fun(arr){
//     let array1=[];

//     for ( let i = 0; i< arr.length; i++){
//         if( arr[i] !== arr[i+1]){
//             array1.push(arr[i])
//         }
//         else{

//         }
//     }
//     return array1;
// }


// console.log(fun(arr1));


// function fun(arr){
//     let obj={};

//     arr.forEach((elem,ind, arr) => obj[elem] =1);
//      return Object.keys(obj)
// }

// console.log(fun(arr1));



// Compare two Arrays (polyfill of Array.prototype.every)
// — create a function that takes 2 args: arr1, arr2
// — this function returns either true or false, if each element of both the arrays are equal with ===


const arr1 = [1,3,3,4,5];

const arr2 = [1,2,3,4,5];


function fun1(arr1, arr2) {
    // arr2.sort((a, b) => a - b)
    // arr1.sort((a, b) => a - b)
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};


console.log(fun1(arr1, arr2));



// Create an array of numbers in the given range
// — create a function that takes 3 args: startNum, endNum, steps
// — this function returns an array which has numbers from startNum, to endNum in steps.



function arrayCreator(startNum, endNum, steps){
    let arr=[];
    for ( let i = startNum; i< endNum ; i=i+steps){
        
        arr.push(i)
    }
    return arr
}

console.log(arrayCreator(1,10,2));













