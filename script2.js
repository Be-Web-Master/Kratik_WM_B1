// "2. Find if the given number exists in an array - ( do not use built-in function ) 
// [11,34,22,21,5,22] -> 
// find 21 if exists return true otherwise false


const arr = [11, 34, 22, 20, 5, 22];

let result = false
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 21) {
        let a = arr[i];
        if (a === 21) {
            result = true;
        }
    }
   
}
console.log(result);


