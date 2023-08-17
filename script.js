const arr1 = [43, 61, 83, 96, 24, 56, 82, 13]

const bubblesort = (arr) => {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}


// bubblesort(arr1);



const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minindex = i;
        const temp = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minindex]) {
                minindex = j
                // console.log(minindex)
                arr[i] = arr[minindex];
                arr[minindex] = temp;
            }

        }
    }
    console.log(arr);
}

// selectionSort(arr1);


const insertionSort= (arr) => {
    const n = arr.length;
    for(let i=1; i< n ; i++){
        let current = arr[i]
        let j=i-1;
        while( j >= 0 && arr[j]> current) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1]= current;
    }
    console.log(arr)
}


// insertionSort(arr1)


// const arr2 = [6,8,11,9,3,5,15,1]/

// const mergeSort = (arr) =>{
//     arr.map(num=>[num])
// }


// const arr2 = [6,8,11,9,3,5,15,1].map((num) => [num])

// const mergeSort = (arr1, arr2)=>{
//     let idx=0 , idx2 =0 ,resultarr = [];
//     if(   )
// } 





