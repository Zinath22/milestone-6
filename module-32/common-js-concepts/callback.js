function greeting(greetingHandler,name){
    greetingHandler(name);
}
// greeting('Halim mama')
// const numbers =[45, 54, 78] ;
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
// console.log(laptop)
function greetingHandler(name){
    console.log('Good morning', name)
}
function geetEvening(name){
    console.log('Good morning', name)
}
function greetNight(name){
    console.log('Good night', name)
}


greeting(greetingHandler, 'tom')
greeting(greetingHandler, 'jerry')
greeting(greetingHandler, 'chinku')
greeting(geetEvening, 'Guddu')
greeting(geetEvening, 'salman')
greeting(greetNight, 'pinku')


function submitHandler(){
    console.log('submit button clicked')
}
document.getElementById('btn-submit').addEventListener('click',submitHandler)
