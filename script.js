// function mymap(arr, callback, thisarg){
//     const resultarr=[];
//     for (let i=0;i< arr.length; i +=1) {
//         const arrelem = callback(arr[i],)
//         resultarr.push(arrelem)
//     }
//     return resultarr
// }

// const callfunc =( el, idx, arr) => {
//     return el ** idx
// }


// function mymap(arr, callback, thisarg) {
//     if (!arr || !Array.isArray(arr)) {
//         return new Error("not an array")
//     }
//     if (!callback || typeofcall !== "function") {
//         return new ERROR(`$({callBack} is not a function`)
//     }

//     for (let i = 0; i < arr.length; i += 1) {
//         const arrelem = callback(arr[i],)
//         resultarr.push(arrelem)
//     }
//     return resultarr

//     }


//     mymap([1,2,3,4,5]) 


// const accVal = [1,2,3,4,5].reduce( acc, elem , idx, arr) =>{




function myReduce(arr, cB , initvalue, thisarg ) {
    let accToBe ,startIdx;
    if(initvalue !== undefined) {
        if (!arr, length) return initvalue
        accToBe = initvalue
        startindx=0
    }
    if (initvalue === undefind && !arr.length) return new Error ('sdjbfgjhjhijrhqiu');
    if (initvalue === undrfind && arr.length) {
        accToBe =arr[0]
        startIdx =1
    }

    for(let i= startIdx; 1<arr.length; i+=1){
        accToBe =cB( accToBe, arr[i], i, arr)
    }

    return accToBe

}