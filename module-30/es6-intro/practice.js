// 1. write an arrow function that will take 3 parameters , will multipy the parameters and will return the result 

const multipyNumbers =(num1, num2, num3) => {
    const result = num1 * num2 * num3;
    return result;
}
const multipyResult = multipyNumbers(2, 2, 2);
// console.log(multipyResult)


// // 2 write the following sentence on three lines an print the result
const  message = `I am a web developer.
I love to code.
I love to eat Biriyani.
`
// console.log(message)

// 3. write an arrow that will take  2 parameters. one parameter will come from you and the other parameter will be a default parameter.Add these two parameters and return the result

const addDefault = (num1, num2 = 5) => {
    const result = num1 + num2;
    return result;
};
const sum = addDefault(10);
// console.log(sum)

// 2.a write an arrow function 
// a. It will take an array where the array elements will be the name of your friends
// b. check if the length of each elements is even push elements with even length to a new array and return the result

const filterNamesByEvenLength = (names) => {
    const evenLengthNames = [];
    for (const name of names) {
      if (name.length % 2 === 0) {
        evenLengthNames.push(name);
      }
    }
    return evenLengthNames;
  };
  
  const namesArray = ["karim", "rahim", "borim", "morim", "jorim", "norim", "lulim", "polim"];
  const result = filterNamesByEvenLength(namesArray);
  
//   console.log(result);

// 3.a. square each array elements
// b calculate the sum of the squared elements
// c return the average of the sum of the squared elements

const calculateAverageOfSquaredElements = (arr) => {
    let sumOfSquaredElements = 0;
    for (const num of arr) {
      const squared = num * num;
      sumOfSquaredElements += squared;
    }
    const average = sumOfSquaredElements / arr.length;
    return average;
  };
  
  const numbersArray = [2, 3, 4, 10];
  const averageResult = calculateAverageOfSquaredElements(numbersArray);
  
  console.log(averageResult);