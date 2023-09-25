// "4. Write a JavaScript function to check if a given string is a palindrome 
// (reads the same forwards and backwards).

function palindrome(str){

    let str2 = "";
    for( let i = str.length-1; i>=0; i--){
        str2= str2 +str[i];
    }

    let result = false;
    if( str === str2){
        result= true; 
    }
    console.log(result);
}

palindrome("nitin");