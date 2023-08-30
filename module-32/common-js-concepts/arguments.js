function sum(a, b, c){
    const args = [...arguments];
    console.log(args)
    const result = a + b + c;
    return result;
}
const total = sum(45, 89, 12);
// console.log(total)
console.log(sum.length)