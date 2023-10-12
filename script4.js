// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two 
// sorted arrays.
// The overall run time complexity should be O(log (m+n)).


let m = [1,2,3,7];
let n = [2];


function findMedian(m,n){

    for( let i = 0; i<n.length; i++){
        m.push(n[i]);
    }

    let a = m ;
    let output= 0;

    for( let j = 0 ; j< a.length; j++){

        output = output + a[j];
    }

     return output/ a.length
}


console.log(findMedian(m,n));


