function calculateCoins(input, coinValue) {
    var coins = {};
    if (input > coinValue) {
        coins.total = Math.floor(input / coinValue);
        coins.remainder = input % coinValue; 
    } else {
        coins.total = 0;
        coins.remainder = input;
    }
    return coins;
 
}
 
function coinCounter (input) {
  var coinPurse = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
  var tempObject = {}; // temporary object to hold info from calculateCoins
  var tempValue = 0; // variable used to call next iteration of calculateCoins
  var coinValueArray = [25, 10, 5, 1]; // represents quarters, dimes, nickels, pennies
  var i = 0; // iterator needed for forEach function to coordinate two arrays
  
  tempValue = input * 100;

  for (var denom in coinPurse) {
    if (coinPurse.hasOwnProperty(denom)) {
      tempObject = calculateCoins(tempValue, coinValueArray[i++]);
      coinPurse[denom] = tempObject.total;
      tempValue = tempObject.remainder;
    }
  }
  return coinPurse;
}
 
var coins = coinCounter(.99);
console.log(coins);

