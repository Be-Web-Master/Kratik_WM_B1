let arr1= [1,2,3,4,5,6,7,8,9,10]


function binarySearch(arr, value){

    let leftsearch= 0;
    let rightsearch = arr.length-1;
    let middle= Math.floor((leftsearch + rightsearch)/2);

    while( value !== arr[middle] && leftsearch < rightsearch ){
        if(arr[middle] < value){
            leftsearch= middle + 1;
        }
        else{
            rightsearch= middle;
        }
        middle = Math.floor((leftsearch + rightsearch)/2);}
        if( arr[middle] === value){
            return middle;
        }
    return -1
};


console.log(binarySearch(arr1, 11));

