function findNaiveSum(factors, upperBound) {
  // FINDSUM Find the 
  var sum = 0;
  for (var i = 1; i < upperBound; i++) {
    for(var j = 0; j < factors.length; j++) {
      if (i%factors[j] === 0) {
        sum += i;
        break;
      }
    }
  }
  return sum;
}

function findGaussSum(factors, upperBound) {
    // for each factor
    
    // divide upperBound by factor
    // floor the value
    // Use Gauss formula
    // multiply by divided out factor
    // Inclusion exclusion principle.
    // Example
    // factors: 3, 5 , 7
    // This would change to 3 + 5 + 7 - 3N5 - 3N7 - 5N7  + 3N5N7
}

var myFactors = ['3','5'];
var myUpperBound = 1000;

var naiveSum = findNaiveSum(myFactors, myUpperBound);
print(naiveSum);
