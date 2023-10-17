// Given an array of strings words, return the words that can be typed using letters of the 
// alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

let words = ["Hello","Alaska","Dad","Peace"];


function keyboard(word){
    let output =[];

    for( let  i = 0; i< word.length; i++){
        for (let j = 0; j < Math.max(word[i].length); j++){
            // if( word[i] === "q"||"w"||"e"||"r"||"t"||"y"||"u"||"i"||"o"||"p"){
            //     output.push(word[i]);
            // }
            // if(word[i] === "a"||"s"||"d"||"f"||"g"||"h"||"j"||"k"||"l"||"A"||"S"||"D"||"F"||"G"||"H"||"J"||"K"||"L"){
            //     output.push(word[i])
            // }

            if(word[i].split("").filter((elem)=> elem.includes("a"||"s"||"d"||"f"||"g"||"h"||"j"||"k"||"l"||"A"||"S"||"D"||"F"||"G"||"H"||"J"||"K"||"L"))){
                output.push(word[i]);   
            }
        }
    }
    return output;
};

console.log(keyboard(words));