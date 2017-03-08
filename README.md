# Generating-Primes

My plan for the task is to first implement the sieve of Eratosthenes and then build upon it to make a segmented version of the sieve. This reduces the complexity of the algorithm allowing for the faster generation of prime numbers. The resulting primes will then be displayed to the user in a multiplication table.

Unfortunately, I do not have experience with unit testing and after reading into it I feel I do not yet have the understanding of it to implement tests for this task given the time frame.

How to run it: Please download or clone the repo navigate to \jasmine-standalone-2.5.2\src where you will find a JS file and a HTML file. Open the HTML file preferably in chrome as that is what I used it in and follow the instruction on the page. For some processes chrome will ask you whether you would like to wait on or kill the page, waiting will allow the process to continue however, the browser may still run out of memory.

Unfortunately, I didn't think about my 2D array for holding the multiplication table array having a space complexity of O(n^2) when I was writing it so I cannot create tables for large values of N as this requires too much memory. I noted in the code that only generating the top half of the table would be possible. Getting the bottom half from the transpose however, that would only reduce the time complexity.

Furthering my current solution, I think I would have to find some way to run the generation of my multiplication table on one thread whilst creating the table on another thread at the same time deallocating the memory used by the array as I printed it out. Also, I would like to try this alongside only calculating half the table to see how effective that could be.

I am pleased that my sieve can generate 1x10^6 primes in around 9.5 seconds and I am certain there are ways I could improve on this for example by not including multiples of 2 in the array at all instead of eliminating them as Eratosthenes algorithm does.




