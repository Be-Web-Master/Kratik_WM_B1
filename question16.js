// 16. Write a program that prints the numbers from 1 to 50. 
// But for multiples of three, print “Fizz” instead of the number, and for the multiples of five, print “Buzz”. 
// For numbers which are multiples of both three and five, print “FizzBuzz”.


for (let i = 1; i <= 50; i += 1) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuZZ")
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    console.log(i);
}