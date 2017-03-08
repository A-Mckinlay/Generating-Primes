describe ("genPrimeList", function(){

  it("is defined", function(){
    expect(genPrimeList).not.toBeUndefined();
  });

  it("should return an array with the number of primes asked for", function(){
    var result = genNumList(5);
    expect(result.length).toEqual(5);
  });

});

describe("getNumPrimes", function(){
  it("is defined", function(){
    expect(getNumPrimes.not.toBeUndefined());
  });
  it("should return an integer greater tha or equal to one", function(){
    expect(spyOn(getNumPrimes).andReturn())
  });
});
