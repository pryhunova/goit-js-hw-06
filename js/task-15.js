const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 == 0);
console.log(evenNumbers);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers);
