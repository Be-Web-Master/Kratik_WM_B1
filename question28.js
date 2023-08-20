// 28. Given a list of 8 individuals with their names and ages, please perform the following tasks:

// Sort the names in ascending order based on their ages.
// Determine the individuals who are eligible to vote (age should be above 40).

const persons = [
    { name: 'John', age: 45 },
    { name: 'Mary', age: 72 },
    { name: 'Robert', age: 28 },
    { name: 'Elizabeth', age: 59 },
    { name: 'William', age: 67 },
    { name: 'Patricia', age: 51 },
    { name: 'Michael', age: 75 },
    { name: 'Jennifer', age: 32 }
];

// Identify all the persons who are aged more than 60 using filter.


const result = persons.filter( (person)=>{
    // let age60=[];
    for(let i=0; i<person.length; i++){
        if(person[i].age >60){
            return person[i]
        }
        // age60.push(persons[i])
    }
    
    // console.log(age60)
})

console.log(result);