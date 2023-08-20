//14. Without using substring, Extract a substring from a given string based on start and end indices using loops.

let str1 = "string";
// console.log(str1[2])

function ext_str(str, start, end){

    for (let i = start; i < end; i++) {
        console.log(str[i]);

    }
}


console.log(ext_str(str1,2, 3 ));


