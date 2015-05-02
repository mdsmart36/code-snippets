// example of a recursive function

// factorial example: 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) {
	
	// this is the Termination Case, to handle inputs that don't make sense
	if (n < 0) {
		return;
	}
	
	// this is the Base Case, or condition which stops the recursion
  if (n === 0) {
    return 1;
  }
  
  // This is the Recursive Case which will run in all cases in which n !== 0
  // Recursive Case must lead to the Base Case
  return n * factorial(n - 1);
}

console.log(factorial(10));
