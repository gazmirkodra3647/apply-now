// complex_code.js

// This code generates a fibonacci sequence and checks if each number is prime.
// It also calculates the sum and average of all prime fibonacci numbers found.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

function primeFibonacciSumAverage(n) {
  let fibSequence = fibonacci(n);
  let primeFibonacciNumbers = [];

  for (let i = 0; i < fibSequence.length; i++) {
    if (isPrime(fibSequence[i])) {
      primeFibonacciNumbers.push(fibSequence[i]);
    }
  }

  let sum = 0;
  for (let i = 0; i < primeFibonacciNumbers.length; i++) {
    sum += primeFibonacciNumbers[i];
  }

  let average = sum / primeFibonacciNumbers.length;

  console.log("Prime Fibonacci Numbers:", primeFibonacciNumbers);
  console.log("Sum of Prime Fibonacci Numbers:", sum);
  console.log("Average of Prime Fibonacci Numbers:", average);
}

primeFibonacciSumAverage(20);
primeFibonacciSumAverage(50);
primeFibonacciSumAverage(100);
primeFibonacciSumAverage(1000);

// ... (more code to continue calculating and printing prime Fibonacci numbers, sum, and average for different n values)

// End of code.