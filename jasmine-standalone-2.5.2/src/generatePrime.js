/*
* Eratosthenes Sieve and Segmented Eratosthenes Sieve
* @author Allan McKinlay
* @date 07/03/17
*/
var start;
function main(){

  var numPrimesFound = 0;
  var targetNumPrimes = getNumPrimes();
  var primesCheckedUpTo;
  var segSize = 10000;
  const lowerBound = 2;
  var upperBound = 100;
  var primes = [];
  start = new Date().getTime();
  primes = simpleSieve(genNumList(lowerBound, upperBound));
  primesCheckedUpTo = upperBound;

  while(numPrimesFound < targetNumPrimes)
  {
    while(primesCheckedUpTo < upperBound)
    {
      var upperBoundSqrt = Math.ceil(Math.sqrt(upperBound));
      if(primesCheckedUpTo < upperBoundSqrt)
      {
        primes = primes.concat(segSieve(primesCheckedUpTo, upperBoundSqrt,primes));
        primesCheckedUpTo = upperBoundSqrt;
      }
      primes = primes.concat(segSieve(primesCheckedUpTo, upperBound, primes));
      primesCheckedUpTo = upperBound;
    }
    numPrimesFound = primes.length;
    upperBound += segSize;
  }
  printResult(primes, targetNumPrimes);
}

function getNumPrimes(){
  var numPrimes = parseInt(document.getElementById('numPrimes').value);
  if(numPrimes < 1 || numPrimes == NaN){return false;}
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

function segSieve(lowerBound, upperBound, primes){
  var segSize = upperBound - lowerBound;
  var newPrimes = Array(segSize).fill(false);

  for(var i=0; i<primes.length; i++)
  {
    var currentPrime = primes[i];
    var targetIndex = ((Math.floor(lowerBound/currentPrime)*currentPrime)-lowerBound) //Minus lowerBound to adjust to aray index.
    if(targetIndex < 0) targetIndex += currentPrime; //to bump targetIndex into the segment range if required.
    while(targetIndex < segSize)
    {
      newPrimes[targetIndex] = true;
      targetIndex += currentPrime;
    }
  }

  var resultPrimes = [];
  for(var i=0; i<newPrimes.length; i++)
  {
    if(!newPrimes[i])
    resultPrimes.push(i + lowerBound); //i + lowerBound gives the value of the prime at the index i
  }
  return resultPrimes;
}

function printResult(primes, numPrimes)
{
  var display = [];
  for(var i=0; i<numPrimes; i++) //Trim excess results
  {
    display.push(primes[i]);
  }
  primes.length = 0; //Delete the primes array to free up space

  //Create multiplication table:
  var htmlBuffer = "<table border='1'><tr>";
  for(var row=0; row<display.length+1; row++)
  {
    if(row>0) htmlBuffer += "<tr>";
    for(var cell=0; cell<display.length+1; cell++)
    {
      if(row == 0) {//Top row
        if(cell == 0)//Top left empty cell
        {
          htmlBuffer += "<td></td>"
        }
        else{
          htmlBuffer += "<td>"+ display[cell-1] + "</td>";
        }
      }else if (row>0 && cell == 0) {//Left most cell of row
        htmlBuffer += "<td>"+ display[row-1] + "</td>";
      }else {//Any normal product cell. Using the transpose here would half the number of calculations
        htmlBuffer += "<td>"+ display[row-1]*display[cell-1] + "</td>";
      }
    }
    htmlBuffer += "</tr>";
  }
  htmlBuffer +="</table>";


  document.getElementById("table").innerHTML = htmlBuffer;
  setTimeout(function () {
    var end = new Date().getTime();
    var totalTime = end - start;
    document.getElementById("totalTime").innerHTML = "Time taken to generate primes and render table on screen: " + totalTime +"ms";
  },10)

}
