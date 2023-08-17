function fabinacci(num) {
    let arr = [0, 1];
    for (let i = 0; i < num; i++) {
        arr[i + 2] = arr[i] + arr[i + 1]
    }
    return arr
}

// // console.log(fabinacci(10));


function fab(n) {
    let arr = [0, 1];
    let i = 0;
    while (i < n) {

        arr[i+2]= arr[i]+arr[i+1];
        // console.log(sum,i,i+1)
        // arr.push(sum);
        i++;
    }
    return arr;
}

// // console.log(fab(10));


function fabforeach(num) {
    const generate = (num) => {
        const output = []
        for (let i = 1; i <= num; i++) {
            output.push(i)
        }
        return output
    };
    let arr = generate(num);
    // let arr=[1,2,3,4,5,5,6];
    let arr2 = [0, 1];
    arr.forEach((elem, indx) => {
        // console.log(indx);
        arr2[indx + 2] = arr2[indx] + arr2[indx + 1]
        // arr2.push(sum);
    })
    console.log(arr2)
}

// fabforeach(12);