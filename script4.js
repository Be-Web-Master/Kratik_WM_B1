// Remove same character from a string if it exists 3 times
// const string = "aabbaa"
// output - "bba"
// function removeSubstring(string) - this function will return string
// explanation - a appeared 3 times so we have remove 3 a's
// b appeared 2 times so can't remove
// last a will not be removed bcoz we don't have another 2 a's in the string



const string = "aabbaa"


function removeSubstring(string){

    let output = "";

    for(let i = 0; i< string.length; i++){
        for(let j = 1; j< string.length; j++){

            if(string[i] !== string[j]){
                output = string[j];
            }
        }
    }

    return output;

};


console.log(removeSubstring(string));



