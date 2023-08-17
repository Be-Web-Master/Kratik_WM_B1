// const add_even=(num)=>{


// }

// console.log(gen(10))

const add_even=(num)=>{
    let arr=gen(num);
    let sum =0;
    for(let elem of arr){
        if (elem%2 == 0){
            sum= sum +elem
         }
    }
    console.log(sum)
}


add_even(4);




