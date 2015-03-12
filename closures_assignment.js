/*
  .....  YOUR MISSION  .....

  Using your knowledge of closures, create a function named secretKey()
  that accept any integer as an argument. That function should return
  another function that, when called, should output any random number
  between 1 and the number passed into secretKey().
*/


function secretKey (number) {
	return function () {
		console.log(Math.floor(Math.random() * number) + 1);
	}

}

var createKey = secretKey(341);
createKey();
