function isPrime(number) {
    if (number <= 1) {
      return false; 
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return true; 
      }
    }
  
    return true; 
  }

  console.log(isPrime(7)); 
  console.log(isPrime(10)); 
  