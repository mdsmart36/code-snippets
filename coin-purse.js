function calculateCoins(input, coinValue) {
	var coins = {};
	input *= 10;
	if (input > coinValue) {
		var temp = input / coinValue;
		coins.total = Math.floor(temp);
		coins.remainder = (temp - coins.total) * coinValue;
	} else {
		coins.total = 0;
		coins.remainder = input;
	}
	return coins;

}

function coinCounter (input) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = calculateCoins(input, 25)["total"];
  // coinPurse.dimes = calculateCoins(input, 25)["remainder"];
  // coinPurse.nickels = calculateCoins(coinPurse.dimes, );
  // coinPurse.pennies = 0;

  return coinPurse;
}

var coins = coinCounter(.67)
console.log(coins);
