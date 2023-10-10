
// Easy - Find the peak of the mountain
// const arr = [ 1,2,4,3,6,3,1 ]
// output - 6
// function getPeak(arr) - this function will return peak of the mountain,
// 6 is greater among all so 6 is the peak

// Baadme kiya hai...



const arr = [ 1,2,4,3,6,3,1 ]

function getPeak(arr){
    let output = arr.reduce((a,b)=>(a<b? a = b : a),0);
    return output;
}

console.log(getPeak(arr));



