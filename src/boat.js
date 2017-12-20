
(function(exports){
  function legalPlacement(oldCell, newCell){
    splitCell(newCell)
    var newNum = parseInt(dimensions[1])
    var newLetter = dimensions[0]
    var newLetter = newLetter.charCodeAt(0)

    splitCell(oldCell)
    var oldNum = parseInt(dimensions[1])
    var oldLetter = dimensions[0]
    var newLetter = oldLetter.charCodeAt(0)

    var numDiff = oldNum - newNum
    var letterDiff = oldLetter - newLetter

    return ((numDiff + letterDiff) > 1)

  }
  exports.legalPlacement = legalPlacement;
})(this);

(function(exports){
  function splitCell(cell){
    return dimensions = cell.split(",")
  }
  exports.splitCell = splitCell;
})(this);

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

// refactor this so jquery sends size

Boat.prototype.setSize = function(size){
  this.size = size
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

Boat.prototype.cellsFree = function(){
  return this.size > this.occupiedCells.length
}

Boat.prototype.hitCell = function(cell){
  var index = this.occupiedCells.indexOf(cell)
  this.occupiedCells.splice(index, 1)
}
