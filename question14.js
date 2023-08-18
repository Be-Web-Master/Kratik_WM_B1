//14. Without using substring, Extract a substring from a given string based on start and end indices using loops.

let str = "string"
// console.log(str[1])

function func(i){
    let i=0;

    for (let i = 0; i < str.length;) {
        console.log(str[i])
    }
}

console.log(func(2));
