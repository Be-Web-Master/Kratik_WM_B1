// 25. Find and print the longest word in a sentence using loops.

// un-done..............................

let sentence = "my name is anthony gonsalvis";

function longest_word(str) {

    let splited = str.split(" ");
    let lenOfElements=[];
    let maxs = 0;
    
    for( let i=0; i< splited.length; i++){
        let arr = (splited[i].length)
        lenOfElements.push(arr);
        
    }
    console.log(lenOfElements);
    const max= lenOfElements.reduce((acc, val)=> {
        if(acc < val){
            acc= val
        }
        return acc
    });
    // console.log();

   
}

console.log(longest_word(sentence));



 // const max= lenOfElements.reduce((acc, val)=> Math.max(acc, val));


