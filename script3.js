// Remove all the smaller characters from a string
// function removeSmallChars(string) - this function will return an string which does not have any small character
// const string = "AaBBccdeF"
// output - "ABBF"



const string = "AaBBccdeF";


function removeSmallChars(string){

    let str = "";
    for(let i = 0 ; i< string.length; i++){
        if(string[i] !== string[i].toLowerCase()){
            str= str + string[i];
        }
    }
    return str;
}

console.log(removeSmallChars(string));





