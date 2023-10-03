const calculateFibonacci = (n) => {
  if (n < 2 && n > -2) return n;
  if (n < 0) return calculateFibonacci(n + 2) - calculateFibonacci(n + 1);
  else {
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  }
};

const number = parseInt(process.argv[2]);
const result = calculateFibonacci(number);
console.log(`Fibonacci of ${number} is ${result}`);
