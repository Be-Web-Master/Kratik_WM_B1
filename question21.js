// 21. Using loop, Create a function that takes a string as input and returns the reverse of that string.

let string = "ABCD";

function reverse_string(str) {
    let len1 = str.length-1;
    let reversed = "";
    for (let i = len1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    console.log(reversed);
}

reverse_string(string);