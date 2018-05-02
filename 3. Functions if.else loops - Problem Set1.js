// Checks if a number is even

var num = prompt("Enter a number");

function isEven(num) {
	if (num % 2 == 0) {
			return true;
		}
		else {
			return false;
		}
}

var truth = isEven(num);

console.log(truth);

// Calculates the factorial of a number

var num = prompt("Let's factorial a number. Please enter a number.");

function factorial(num) {
	var total = 1;	
	if (num == 0 || num == 1) {
		return total;
	}
	else {
		for (var i=2;i<=num;i++) {
			total = total * i; 
		}
	}
	return total;
}

var result = factorial(num);

console.log(result);


// Changes all characters from "-" to "_"

var exc = prompt("Enter a word to replace \"-\" with \"_\"");

function kebabToSnake(exc) {
	var k = exc.replace(/-/g,"_");

	return k;

}

var word = kebabToSnake(exc);

console.log(word);
