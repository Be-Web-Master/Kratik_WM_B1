// 18. Count the number of vowels and consonants in a given string.

let str_type= "AbcdEfghijklmnopqrstUvwxyz"


function number_of_type(str){
    let vowel='';
    let consonent ='';
    for(let i = 0; i< str.length; i++){
        if(str[i]==="a" || str[i]==="e" ||str[i]==="i" ||str[i]==="o" ||str[i]==="u" ||
        str[i]==="A" ||str[i]==="E" ||str[i]==="I" ||str[i]==="O" ||str[i]==="U" ){
            vowel= vowel + str[i];
        }
        else{
            consonent= consonent + str[i];
        }
    }
    console.log(`Vowel: ${vowel.length} and Consonent: ${consonent.length}`)
}

console.log(number_of_type(str_type));