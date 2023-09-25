
// "3. Reverse an array. [1,2,3,4,5,6] -> [6,5,4,3,2,1] (do not use built-in method)


let arr = [1,2,3,4,5,6];

let result=[];

for(let i= arr.length-1; i>=0; i--){
    result.push(arr[i]);
}
console.log(result);



