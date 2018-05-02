// This function prints the characters in a given list in reverse order


function printReverse(list) {
	for (var i = list.length-1; i >= 0; i--) {
		console.log(list[i]);
	}
}




// This function checks if all elements are identical in a given list


function isUniform(list) {
	var first = list[0];
	for (var i = 1; i < list.length; i++) {
		if (first !== list[i]) {
			return false;
		}
		else {
			return true;
		}
	}	
	return true;
}




// This function sums all of the numbers from a given list


function sumArray(list) {
	var total = 0;
	list.forEach(function(item) {
		total += item;
	});
	return total;
}




// This function finds the largest number from a given list


function max(list) {
	var max = list[0];
	for (var i = 1; i < list.length; i++) {
		if (list[i] > max) {
			max = list[i];
		}
	}
	return max;
}