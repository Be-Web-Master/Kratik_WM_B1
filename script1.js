// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false


const word ="AFSAF";

function useageOfCapital(word){

    let output= false;
    let capital = false;
    for( let i = 0; i< word.length; i++){
        if(i === 0){
            if(word[i] <= 'Z'){
                capital = true;
            }
        }else{
            if(capital){
                if(word[1] <= 'Z' && word[i] > 'Z'){
                    return false;
                }
                if(word[1] >= 'a' && word[i] < 'a'){
                    return false;
                }
            }else{
                if(word[i] < 'a'){
                    return false;
                }
            }
        }
        
        // if( word[0] >= 'Z' && word[i+1].toLowerCase()){
        //     output = true;
        // }
       
    }

    return output;

}


console.log(useageOfCapital(word));

// console.log(typeof word[0]);