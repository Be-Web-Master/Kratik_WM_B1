// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// function groupAnagrams(strs) - this will return array of grouped anagrams


let arr = ["eat","tea","tan","ate","nat","bat"];

function groupAnagrams(arr){

    let output = [];

    
    for(let i = 0; i< arr.length; i++){
        for(let j=0; j<arr[i].length; j++){

            output.push(arr.filter((elem)=> elem.includes(arr[i][j])))
        }
    }
   
    let output2= [];

    for(let k = 0; k< output.length; k++){

        if( output[k] !== output[k+1]){
            output2.push(output[k]);
        }
    }
     return output;
};


console.log(groupAnagrams(arr));


