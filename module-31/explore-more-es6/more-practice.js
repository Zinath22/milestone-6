const oddArray = [ 1, 3, 5, 7, 9];
const evenNum = oddArray.map(n => n + 1)
// console.log(evenNum);

// 2 
const arraySay = [33, 50, 79, 78, 90,101, 30];
// const selected = arraySay.filter(p => p % 10 === 0);
const selected = arraySay.find(arraySay => arraySay % 10)

// console.log(selected)

// 3 
const instructor = [
    {name: 'Nodi', age:28, position:'Senior'},
    {name: 'Akil', age:26, position:'Junior'},
    {name: 'Shobuj', age:30, position:'Senior'}
]
const names = instructor.filter(p => p.position === 'Senior')
const seniorNames = names.map(instructor => instructor.name);
// console.log(seniorNames)

// 4 
const people = [
    { name: 'Meena', age: 20},
    { name: 'Rina', age: 15},
    { name: 'Suchorita', age: 22}
];

const totalAge = people.reduce((accumulator, person) => accumulator + person.age, 0);
console.log(totalAge);