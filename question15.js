// 15. Filter an array of book objects, keeping only the books with a rating greater than 4.

let arr = [
    { title: 'The Great Gatsby', rating: 4.7 },
    { title: 'To Kill a Mockingbird', rating: 4.5 },
    { title: 'Pride and Prejudice', rating: 4.8 },
    { title: 'Animal Farm', rating: 4.6 }
]


let Filtered_array = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].rating > 4.5) {
        // console.log(arr[i])
        Filtered_array.push(arr[i])
    }
}

console.log(Filtered_array);

// console.log(arr);

// console.log(obj.rating);




