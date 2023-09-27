
// Convert the capital character to lowercase and lowercase character to uppercase
// given string = "WebMaster"
// output - "wEBmASTER"
// function toggleEachCharacter(string) - this function will return the converted string




function toggleEachCharacter(string){

    let str ="";

    for( let i = 0; i< string.length; i++){
        if ( string[i] === string[i].toUpperCase()){
            str= str+ string[i].toLowerCase()
        }
        if ( string[i] === string[i].toLowerCase()){
            str= str+ string[i].toUpperCase()
        }
    }

    return(str);
}

console.log(toggleEachCharacter("WebMaster"));

