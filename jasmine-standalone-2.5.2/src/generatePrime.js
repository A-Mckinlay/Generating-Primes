function main(){
  var start = new Date().getTime();

  var targetNumPrimes = getNumPrimes();
  const lowerBound = 2;
  var upperBound = targetNumPrimes;//Temporary, so I can adjust the upperBound easily.
  var primes = [];

  primes = simpleSieve(genNumList(lowerBound, upperBound));



  var end = new Date().getTime();
  var time = end - start;
  printResult(primes, time);
}

function getNumPrimes()
{
  var numPrimes = parseInt(document.getElementById('numPrimes').value);
  if(numPrimes < 1 || numPrimes == NaN) return false;
  return numPrimes;
}

function genNumList(lowerBound, upperBound){
  var numList = [];
  for(var i=lowerBound; i<upperBound+1; i++)
  {
    numList.push(i);
  }
  return numList;
}

function simpleSieve(numList)
{
  var upperBoundSqrt = Math.ceil(Math.sqrt(numList[numList.length-1]))
  for(var i=0; i<upperBoundSqrt; i++)
  {
    if(numList[i] != 0)
    {
      var p = (((numList[i]) * (numList[i]))-2)
      for(p; p<numList.length; p += numList[i])
      {
          numList[p] = 0;
      }
    }
  }

  var primes = [];
  for(var i=0; i<numList.length; i++)
  {
    if(numList[i] != 0)
    primes.push(numList[i]);
  }
  return primes;
}

function printResult(primes, time)
{
  document.getElementById("Primes").innerHTML = primes.join();
  document.getElementById("time").innerHTML = "Time taken: " + time +"ms";
}
