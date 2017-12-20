// get grid going to make placing code simpler

function Boat(){
  this.hits = 0
  this.occupiedCells = []
}

Boat.prototype.placeBoat = function(cell){
  if(this.cellsFree()){
    this.occupiedCells.push(cell)
  }
}

Boat.prototype.isSunk = function(){
    if(this.hits === this.size){
      return true
    }
}

Boat.prototype.setDirection = function(direction){
  this.direction = direction
}


Boat.prototype.setSize = function(size){
  this.size = size
}

//get rid of this eventually 
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

Boat.prototype.cellsFree = function(){
  return this.size > this.occupiedCells.length
}

Boat.prototype.hitCell = function(cell){
  var index = this.occupiedCells.indexOf(cell)
  this.occupiedCells.splice(index, 1)
}
