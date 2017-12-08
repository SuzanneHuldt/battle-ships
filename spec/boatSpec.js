describe("Boat", function(){

  beforeEach(function(){
    boat = new Boat()
  });

  describe("new boat", function(){
    it("launches a boat with zero hits", function(){
      expect(boat.hits).toEqual(0)
    });
  });



});
