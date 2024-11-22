// MAP
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares);
 // FILTER
 const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers);
// REDUCE
const number = [1, 2, 3, 4, 5];
const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue,
0);
console.log(sum);
// FOREACH
const names = ['Alice', 'Bob', 'Charlie', 'David'];
names.forEach(name => {
 console.log(name);
});
