// Find the objects with satisfy below conditions
// name should start with A or B
// age should be less than 25
// const arr = [ { name:"bca", age:21 }, { name:"ba", age:25 }, { name:"aa", age:12 },{ name:"da", age:21 }, { name:"Ab", age:26 },{ name:"Aa", age:21 } ]
// output - [ { name:"bca", age:21 }, { name:"aa", age:12 },{ name:"Aa", age:21 } ]
// function getEligibleMembers(arr) - this function will return an array with the satisfied conditions

const arr = [{ name: "bca", age: 21 }, { name: "ba", age: 25 }, { name: "aa", age: 12 }, { name: "da", age: 21 }, 
{ name: "Ab", age: 26 }, { name: "Aa", age: 21 }]

function getEligibleMembers(arr){

    let output = [];

    for(let i = 0; i< arr.length; i++){
        if( (arr[i].name).slice(0,1) === "a"||"b" && arr[i].age <  25){

            output.push(arr[i])
        }
    }

    return output;


}

console.log(getEligibleMembers(arr));