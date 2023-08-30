
// Truthy:
// 1. true
// 2. any number (+ve, -ve) will be truthy other than 0
// 3. any string other than empty string
// 4. '0', 'false'
// 5. {}
// 6. []


let x = [2,5];
console.log(x)
if(x){
    console.log('value of x is truthy')

}
else{
    console.log('value of x is falsy')
}

// optional 
// check falsy 
const y = '';
if(!y){
    console.log('value is falsy')
}

// check true 
const z = 50;
if(!!x){
    console.log('value is truthy')
}

