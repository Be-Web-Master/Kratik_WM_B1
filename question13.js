let arr = [1,2,3,4,9,6,7,0]
// console.log(Math.max(arr));
const maxval= arr.reduce((acc, val)=> {
    if( acc< val){
        acc = val
    }
    return acc

}, arr[0])

console.log(maxval);

