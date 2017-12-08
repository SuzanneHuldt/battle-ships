function Grid(){
  this.takenCells = []
}

Grid.prototype.cellsTaken = function(){
  return this.takenCells.length
}

Grid.prototype.takeCell = function(cell){
  var free = this.freeCell(cell)
  switch(free){
    case true:
      break;
    default:
      this.takenCells.push(cell)
  }
  }

Grid.prototype.freeCell = function(cell){
  for(var i; i < this.takenCells.length; i++){
    return this.takenCells[i] === cell}
}
