const arr = [ -3,2,1,16,3,43,17,71,10,18,120,63,121,151,11 ];
const prime = [];

function isPrime(arr) {

  const max = Math.max(...arr);
  const arrayOfValues = [...Array(max+1).keys()];
  const limit = Math.floor(Math.sqrt(max));
  const booleanArray = [];

  // Sieve of Eratosthenes
  for( let i=0; i<arrayOfValues.length; i++ ) {
    if ( arrayOfValues[i] === 0 || arrayOfValues[i] === 1 )
      booleanArray.push(false);
    else
      booleanArray.push(true);
  }

  for( let i=2; i<=limit; i++ ) {
    if( booleanArray[i] ) {
      for( let j=2; j<=max; j++ ) {
        booleanArray[j*i] = false;
      }
    }
  } 

  for( let i=2; i<=max; i++ ) {
    if( booleanArray[i] )
      prime.push(i);
  }

  // Comparison of arrays
  let primeNumbers = arr.filter(number => prime.includes(number));

return primeNumbers;

}

console.log(isPrime(arr));