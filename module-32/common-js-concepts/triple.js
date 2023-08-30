const first = 1;
const second = true;
if(first === second){
    // console.log('values are equal')
}
else{
    // console.log('values are not equal');
}

// type coercion
// type conversion
// type casting
// quiz 
let p='Javascript'; 
let q=p; 
p='React'; 
// console.log(q);

const isTrue=true;
// console.log(!isTrue ? "hello" : "world")

const sum =(p, q)=> {
    p + q;
   }
   const result = sum(2, 3);
//    console.log(result);

if ("2" === 2) {
    // console.log("Inside if");
   } else {
    // console.log("Inside else");
   }

   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));