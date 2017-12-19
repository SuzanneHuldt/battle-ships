describe("Boat", function(){

  beforeEach(function(){
    boat = new Boat()
  });

  describe("new boat", function(){
    it("launches a boat with zero hits", function(){
      expect(boat.hits).toEqual(0)
    });
    it("launches a boat with correct dimensions for type SUBMARINE", function(){
      boat.chooseType('submarine')
      expect(boat.size).toEqual(3)
    });
    it("launches a boat with correct dimensions for type DESTROYER", function(){
      boat.chooseType('destroyer')
      expect(boat.size).toEqual(2)
    });
    it("launches a boat with correct dimensions for type CRUISER", function(){
      boat.chooseType('cruiser')
      expect(boat.size).toEqual(3)
    });
    it("launches a boat with correct dimensions for type BATTLESHIP", function(){
      boat.chooseType('battleship')
      expect(boat.size).toEqual(4)
    });
    it("launches a boat with correct dimensions for type CARRIER", function(){
      boat.chooseType('carrier')
      expect(boat.size).toEqual(5)
    });
  });

  describe("place boat", function(){
    it("adds the cells where the boat is placed into occupied cells", function(){
      boat.chooseType('destroyer')
      boat.placeBoat('A,3')
      expect(boat.occupiedCells[0]).toEqual('A,3')
    });
    it("does not place more cells than the size of the boat", function(){
      boat.chooseType('destroyer')
      boat.placeBoat('A,3')
      boat.placeBoat('A,4')
      expect(boat.placeBoat('A,5')).toEqual('error')
    });
    it("does not place more cells than the size of the boat", function(){
      boat.chooseType('destroyer')
      boat.placeBoat('A,3')
      boat.placeBoat('A,4')
      boat.placeBoat('A,5')
      expect(boat.occupiedCells.length).toEqual(2)
    });
  });

  describe("floating status", function(){
    it("shows whethere boat has sunk", function(){
      boat.chooseType('cruiser')
      boat.hits = 3
      expect(boat.isSunk()).toEqual(true)
    });
  });

  describe("take hit", function(){
    it("removes cell when hit", function(){
      boat.chooseType('destroyer')
      boat.placeBoat('A,3')
      boat.placeBoat('A,4')
      boat.hitCell('A,3')
      expect(boat.occupiedCells.length).toEqual(1)
    });
  });

  describe("correct boat placement", function(){
    it("doesn't allow diagonal boat placement", function(){
      boat.chooseType('destroyer')
      boat.placeBoat('A,3')
      expect(boat.placeBoat('B,2')).toEqual('error')
    });
  });

  describe("returns whether boat placement is legal", function(){
    it("returns illegal placement for diagonal cell placement", function(){
      boat.chooseType('destroyer')
      boat.placeBoat('A,3')
      expect(boat.placeBoat('B,2')).toEqual('error')
    });
  });



});
