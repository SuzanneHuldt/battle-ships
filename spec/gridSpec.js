describe("Grid", function(){

  beforeEach(function(){
    grid = new Grid()
  });
  describe("new grid", function(){
    it("opens a new grid with no filled cells", function(){
      expect(grid.takenCells()).toEqual(false)
    });
  });
});
