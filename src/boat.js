function Boat(){
  this.hits = 0
  this.occupiedCells = []
}

Boat.prototype.chooseSize = function(size){
  this.size = size
}

Boat.prototype.placeBoat = function(cell){
  this.occupiedCells.push(cell)
}

Boat.prototype.isSunk = function(){
    if(this.hits === this.size){
      return true
    }
}
