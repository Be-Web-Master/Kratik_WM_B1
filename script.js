 let arr= [1,2,3,3,4,5,6,7,89,7,6,5,4,9]

 function linersearch(arr,value){
    for (let i = 0; i< arr.length; i++){
        if( value === arr[i]){
           return i;
        }
    }
    return -1
    

 };

 console.log(linersearch(arr,8));




 