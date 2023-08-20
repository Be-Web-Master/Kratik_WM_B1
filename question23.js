// 23. Convert a given string to uppercase using a loop.


let str_name = 'bhavna';


// console.log(str.toUpperCase());

function convert_upper(str) {
    let upper_name = '';
    for (let i = 0; i < str.length; i++) {
        upper_ind = str[i].toUpperCase()
        upper_name = upper_name + upper_ind
    }
    console.log(upper_name);
}

convert_upper(str_name);