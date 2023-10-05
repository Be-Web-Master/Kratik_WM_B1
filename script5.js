// Find the string which have most vowels in it.
// const arr = ["ap", "aeioUtt", "qAeIoUar", "art"]
// output - qAeIoUar
// function findMostVowelString(arr) - this function will return an string with the most vowels

const arr = ["ap", "qAeIoUar", "aeioUtt", "krt"]

function findMostVowelString(arr){
    let string = [ ];
        for(let str of arr){
            if(str.includes("a")){
                string.push(str)
        }
    }
        

    return string;
}

// console.log(findMostVowelString(arr));
