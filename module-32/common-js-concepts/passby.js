// primitive types are pass by value
let num1 = 5;
let num2 = 7;

function multipy(a, b){
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1)
const output = multipy(num1, num2);
console.log(num1)
// console.log(output)

// object and array are pass by reference
let student1 = {name: 'Jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};
function makeMovie(couple1, couple2){
    couple1.name ='anonto'
    couple2.name ='mim'

}
console.log(student1, student2)
makeMovie(student1, student2);
console.log(student1, student2)