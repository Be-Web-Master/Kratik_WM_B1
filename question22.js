// 22. Create a program that counts the occurrence of each character in a given string and displays the 
// character count.

let Double = "occurrence";
let character = "r";

function count_char(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i],i)
        if (str.charAt(i) == char) {
            count = count +1
        }
    }
    return count;

}

console.log(count_char(Double, character));



