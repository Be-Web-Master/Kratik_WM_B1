// Remove all the special characters from a string
// const string = "We;b*M:a!s;te**:r!"
// function removeSpecialCharacters(string) - this function will return an string which do not have any 
// special character (alphabets and numbers are not considered as special characters)
// output - WebMaster

const string = "We;b*M:a!s;te**:r!"

function removeSpecialCharacters(string){

    let str ='';
    
    for( let i = 0 ; i<string.length; i++){
        if(string[i].match(/[a-z]/i) ){
            str = str +string[i]
        }
    }
    return str;
}
console.log(removeSpecialCharacters(string));

