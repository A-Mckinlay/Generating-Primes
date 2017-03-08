describe ("main", function(){

  it("is defined", function(){
    expect(main).not.toBeUndefined();
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
