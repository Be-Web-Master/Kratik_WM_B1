// for loop

for(let i =1; i<11; i++){
    console.log(i**2)
}

///generater
const gen =(num)=>{
    const output=[]
    for ( let i=1; i<= num; i++){
        output.push(i)
    }
    return output
}; 

let arr=gen(10);


//for each


let arr=gen(10);
arr.forEach( (elem)=>{
    console.log(elem ** 2)
})


let j =0;
while (j<10){
    j++;
    console.log(j**2);
}










