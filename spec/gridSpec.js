describe("Grid", function(){

  beforeEach(function(){
    grid = new Grid()
  });
  describe("new grid", function(){
    xit("opens a new grid with no filled cells", function(){
      expect(grid.cellsTaken()).toEqual(0)
    });
  });

  describe("take cell", function(){
    xit("takes the cell passed as argument", function(){
      grid.takeCell('1,3')
      expect(grid.cellsTaken()).toEqual(1)
    });
    it("won't take a taken cell", function(){
      grid.takeCell('1,3')
      grid.takeCell('1,3')
      expect(grid.cellsTaken()).toEqual(1)
    })
  });
});
