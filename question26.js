// 26. Write a program to swap the first and last digits of a number.

let number = 127456;


function swap_firstAndLast(num){
    let convert= num.toString();
    let swip= [];
    for( let i= 0; i< convert.length; i++ ){
       swip.push(convert[i])
    }

    [swip[0], swip[swip.length-1]]=[swip[swip.length-1],swip[0]]
    let str='';
    for(let i= 0; i< swip.length; i++){
        str =str + swip[i]
    }
    console.log(parseInt(str))
}

swap_firstAndLast(number);

