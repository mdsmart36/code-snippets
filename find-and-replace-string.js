/* using the slice method and a loop to check for all occurences */

var string = "Matthew Smart Sally Smart Micah Smart Andrew Smart Hannah Smart Jacob Smart";
var searchString = "Smart";
var replaceString = "Smith";

var firstChar = string.indexOf(searchString);

console.log("String before: " + string);

while (firstChar !== -1) {
	string = string.slice(0, firstChar) + replaceString + string.slice(firstChar+searchString.length);
	firstChar = string.indexOf(searchString);
}

console.log("String after: " + string);
console.log();

/* using the String.replace method and a loop to check for all occurences */

string = "Matthew Smart Sally Smart Micah Smart Andrew Smart Hannah Smart Jacob Smart";
searchString = /Smart/g;

console.log("String before: " + string);

string = string.replace(searchString, replaceString);

console.log("String after: " + string);
console.log();
