// Write a program to reverse a given number.

let number= 12345;



function reverse(num){
    let convert= num.toString().length-1;
    let reversed = 0;
    for( let i= convert; i>=0; i--){
     
        reversed =reversed + num.toString()[i];
    }
    console.log(reversed);  
    
}

console.log(reverse(number));



// let str = "12345"
//  console.log(parseInt(str));

