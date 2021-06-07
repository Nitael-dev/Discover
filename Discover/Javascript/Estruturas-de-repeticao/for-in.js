// for..in
// Object

let person = {
    name: 'Jonh',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person.name)
    console.log(person[property])
}