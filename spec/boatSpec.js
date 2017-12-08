describe("Boat", function(){

  beforeEach(function(){
    boat = new Boat()
  });

  describe("new boat", function(){
    it("launches a boat with zero hits", function(){
      expect(boat.hits).toEqual(0)
    });
    it("launches a boat with given dimensions", function(){
      boat.chooseSize(3)
      expect(boat.size).toEqual(3)
    });
  });

  describe("place boat", function(){
    it("adds the cells where the boat is placed into occupied cells", function(){
      boat.placeBoat('1,3')
      expect(boat.occupiedCells[0]).toEqual('1,3')
    });
  });

  describe("floating status", function(){
    it("shows whethere boat has sunk", function(){
      boat.chooseSize(3)
      boat.hits = 3
      expect(boat.isSunk()).toEqual(true)
    });
  });
});
