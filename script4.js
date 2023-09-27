// Count the frequency of each Character in a string
// const string = "WebMaster wEBmasTer Best"
// function getFrequency(string) - this function will return an object containing frequency 
// of each character, lowercase and uppercase of a character considered as single character
// output
// { w : 2
// e : 5
// b : 3
// m : 2
// a : 2
// s : 3
// t : 3
// r : 2
// }

const string = "WebMaster wEBmasTer Best"

function getFrequency(string){

    let str = string.toLowerCase()

    let set = new Set()
    for(let i = 0; i<str.length; i++){
        if(str[i] !== " "){
        set.add(str[i].toLowerCase());
        }
    }
    let key = [...set];

    let val = [];

    for( let i = 0 ; i<str.length; i++){

    
    }

}

console.log(getFrequency(string))






