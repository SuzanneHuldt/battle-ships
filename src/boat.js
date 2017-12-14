function Boat(){
  this.hits = 0
  this.occupiedCells = []
}

Boat.prototype.getSize = function(size){
  return this.size = size
}

Boat.prototype.placeBoat = function(cell){
  if(this.cellsFree()) {
    this.occupiedCells.push(cell)
  }
  else {
    return 'error'
  }
}

Boat.prototype.isSunk = function(){
    if(this.hits === this.size){
      return true
    }
}

Boat.prototype.cellsFree = function(){
  return this.size > this.occupiedCells.length
}

Boat.prototype.hitCell = function(cell){
  var index = this.occupiedCells.indexOf(cell)
  this.occupiedCells.splice(index, 1)
}

Boat.prototype.legalPlacement = function(cell){
  this.splitCell(cell)
  var alpha = dimensions[0]
  var num = dimensions[1]

}

Boat.prototype.splitCell = function(cell){
  return dimensions = cell.split(",")
}

Boat.prototype.chooseType = function(type){
  switch(type) {
    case 'submarine':
      this.size = 3;
      break;
    case 'destroyer':
      this.size = 2;
      break;
    case 'carrier':
      this.size = 5;
      break;
    case 'battleship':
      this.size = 4;
      break;
    case 'cruiser':
      this.size = 3;
      break;
  }
}
