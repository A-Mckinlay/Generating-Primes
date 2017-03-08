function main(){
  console.log("hello");
  var start = new Date().getTime();

  var targetNumPrimes = getNumPrimes();
  console.log(targetNumPrimes);
  var end = new Date().getTime();
  var time = end - start;
}

function getNumPrimes()
{
  var numPrimes = parseInt(document.getElementById('numPrimes').value);
  if(numPrimes < 1 || numPrimes == NaN) return false;
  return numPrimes;
}
