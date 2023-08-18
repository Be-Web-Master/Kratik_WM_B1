let arr1 =[1,2,3,56,43,6,7,8,5,9,11,10]

const result= arr1.filter((num)=>{
    for(let i=0; i< num; i++){
        if(num % 1 === 0){
            return false
        }
        else{
            num !== 1;
        }
    }
})

console.log(result);