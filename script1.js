// "1. Create a function to check if the string contains any vowel
// const string = "qwrtyp"
// function isContainsVowel(string) - complete this function if contains vowel return true otherwise false



function isContainsVowel(string) {
    let result = false;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a") {
            result = true
        }
        else if (string[i] === "e") {
            result = true
        }
        else if (string[i] === "i") {
            result = true
        }
        else if (string[i] === "o") {
            result = true
        }
        else if (string[i] === "u") {
            result = true
        }
    };
    return result;
}

console.log(isContainsVowel("kic"));



