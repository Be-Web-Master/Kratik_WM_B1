// 24. Truncate a given string to a specified length and add an ellipsis at the end using loops.


let given_str  = "aalu ka chalu beta"

function truncate( str, len){
    let till_then= '';
    for(let i =0 ; i< len; i++){
        till_then= till_then + str[i]
    }
    console.log(`${till_then}...`);
}

truncate(given_str, 10);