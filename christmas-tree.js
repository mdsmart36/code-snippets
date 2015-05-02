

function christmasTree(height) {
	var star = "*"; // number of stars for the top of tree
	var space = " ";
	var output = "";

	for (var i = height; i > 0; i--) {

		// add spaces needed for each row
		for (var y = i; y > 0; y--) {
			output += space;
		}
		output += star;
		console.log(output);
		star += "**";
		output = ""; // reset output string for each row
	}
}

christmasTree(20);