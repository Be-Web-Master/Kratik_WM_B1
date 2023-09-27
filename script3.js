// Reverse words in a string
// const string = "WebMaster Batch One"
// output - "One Batch WebMaster"
// function getReversedWords(string) - this function will return string of the reversed words


const string = "WebMaster Batch One";

// console.log());

function getReversedWords(string){

    let str2=  string.split(" ");

    let result = [];
    

    for( let i = str2.length-1; i>=0; i--){

    result.push(str2[i]);

    }

    return result;

}

console.log(getReversedWords(string));