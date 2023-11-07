/* 
   FileName: SophisticatedCode.js
   
   Description: This JavaScript code demonstrates a sophisticated algorithm for finding prime numbers in a given range.
   It implements the Sieve of Eratosthenes algorithm and includes additional optimizations to improve performance.
   
   Author: Your Name
   Date: Today's Date
*/

function findPrimes(start, end) {
  if (start < 2) start = 2;

  const size = Math.floor(end - start) + 1;
  const sieve = new Array(size).fill(true);

  const sqrtEnd = Math.floor(Math.sqrt(end));
  
  for (let i = 2; i <= sqrtEnd; i++) {
    if (isPrime(i)) {
      strikeMultiples(i);
    }
  }

  const primes = [];
  
  for (let i = 0; i < size; i++) {
    if (sieve[i]) {
      primes.push(start + i);
    }
  }

  return primes;
  
  function isPrime(num) {
    const sqrtNum = Math.floor(Math.sqrt(num));
    
    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0)
        return false;
    }

    return true;
  }
  
  function strikeMultiples(num) {
    const startIndex = Math.ceil((start - num) / num) * num;
    
    for (let i = startIndex; i < size; i += num) {
      sieve[i] = false;
    }
  }
}

const startRange = 1;
const endRange = 1000;
const primesInRange = findPrimes(startRange, endRange);

console.log("Prime numbers in range", startRange, "-", endRange);
console.log(primesInRange);