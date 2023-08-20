const person={
    name: 'mohan',
    age:14,
    city:'bhopal'
}

for(const prop in person){
    console.log(`${prop}: ${person[prop]}`)
}
