describe("Game", function(){

  beforeEach(function(){
    game = new Game()
  });

  describe("new game", function(){
    it("launches a new game with zero points", function(){
      expect(game.points).toEqual(0)
    });
  });

});
