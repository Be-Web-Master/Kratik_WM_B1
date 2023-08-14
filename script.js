const studentObj = {
    name: "kratik sahu",
    roll_number: 45,
    class: 9,
    section: 'A',
    gender: 'Male',
    country: 'India'
}

// list all the keys of array?
console.log(Object.keys(studentObj));
// list all the values of array/
console.log(Object.values(studentObj));

// list all the keys and value in the form of array?
console.log(Object.entries(studentObj));


const obj1 = { name: "deepak", gender: "female" }
const obj2 = { section: 'B', gender: "male" }
const obj3 = { country: "india" }

console.log(Object.assign(obj1, obj2, obj3));


const objt = {
    name: 'Kratik',
    printStudentDetails: function () {
        console.log(`myname is ${this.name} and my age is ${this.age}`)
    }
}

const objt2 = Object.create(objt);
objt2.age = 21

objt2.printStudentDetails()

console.log(objt2)

const abc = {
    name: "kratik",
    age: 14
}

Object.defineProperty(abc,
    "class", { value: 9, writable: true })


Object.defineProperty(abc, "gender", { value: "male", writable: true })

abc.gender = "female"

console.log(abc);




Object.defineProperties(abc, {
    address: {value: "142 naveen nager", writable: true},
    section: {value: "A", writable: true}})

console.log(abc);


// ----------------------------8
const bcd = {}



Object.preventExtensions(bcd);

Object.defineProperty(bcd, "gender", { value: "male", writable: true })

console.log(bcd);









