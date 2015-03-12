/* generate random number from 0-255 */

function getRGBValue() {
  return Math.floor(Math.random() * 256 );
}

/* generate random number from lowerLimit to upperLimit */
/* Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;  */

function getRandomNumber( lowerLimitLimit, upperLimit ) {
  
  if (isNaN(lowerLimit) || isNaN(upperLimit)) {
    throw new Error("One of your numbers is not a number.");
  }
  else
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit; 
}
