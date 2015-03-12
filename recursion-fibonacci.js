var n = 20;
var fibArray = [];

// function to return the nth number in the Fibonacci sequence
function fibonacci(n) {
	
	// termination case
	if (n < 1) {
		console.log("You must supply a number greater than zero.");
		return;
	}
	
	// two base cases
	if (n === 1) { return 0; }
	if (n === 2) { return 1; }
	
	// recursive case
	if (n > 2) {
		return fibonacci(n - 1) + fibonacci(n - 2); 
	}
}

console.log("The " + n + "th number in the Fibonacci sequence is " + fibonacci(n));

// create an array with the Fibonacci sequence

for (var i = 1; i <= n; i++) {
	fibArray.push(fibonacci(i));
}
console.log(fibArray);