/*
Create two arrays of numbers called numbers1 and numbers2
Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
Define an arrow function called square that accepts a number as an argument and returns the square of the number.
Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.
Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
*/
const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];


const numbers = [...numbers1, ...numbers2];


const square = (num) => num * num;

const squares = numbers.map(square);

const isEven = (num) => num % 2 === 0;

const evenSquares = squares.filter(isEven);

const [firstEvenSquare, secondEvenSquare] = evenSquares;

console.log(`Original numbers array: ${numbers}`);
console.log(`Squares array: ${squares}`);
console.log(`Even squares array: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}`);
console.log(`Second even square: ${secondEvenSquare}`);
