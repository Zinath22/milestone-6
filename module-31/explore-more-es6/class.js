const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]

// similer 
class product {
    country = 'Bangladesh';
    constructor(name){
        this.name = name
    }
    speak(talk){
        console.log(`Taking about ${talk}`)
    }
}
const lenovo = new product('le lenovo')
// console.log(lenovo)
// lenovo.speak ('Hi ki obostha')

// 2 
class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject
    }
lecture (){
    console.log('Teaching English')
}
}
const tapan = new Teacher('Tapon', 'physics');
console.log(tapan)
const rasid = new Teacher('Rasid', 'English')
console.log(rasid)