// Find the union of arrays
// function findUnion(arr) - this function will return an array of all the
// elements existing in both arrays,
// const arr1 = [ 1,2,3,4,5 ]
// const arr2 = [2,2,3,4,5,5,6]
// output - [2,2,3,4,5,5]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 2, 3, 4, 5, 5, 6];
// output - [2,2,3,4,5,5]

function findUnion(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; i++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        // result.push(arr2[i])
      }
      if (arr2[j] === arr1[i]) {
        result.push(arr2[j]);
      }
    }
  }
  return result;
}

// console.log(findUnion(arr1, arr2));
