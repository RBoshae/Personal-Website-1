function findNaiveSum(factors,upperBound) {
  // FINDSUM Find the 
  var sum = 0;
  for(var i = 1; i < upperBound; i++) {
    for(var j = 0; j < factors.length; j++) {
      if (i%factors[j] === 0) {
        sum += i;
        break;
      }
    }
  }
  return sum;
}

var myFactors = ['3','5'];
var myUpperBound = 1000;

var naiveSum = findNaiveSum(myFactors,myUpperBound);
console.log(naiveSum);