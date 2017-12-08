function Grid(){
  this.takenCells = []
}

Grid.prototype.cellsTaken = function(){
  return this.takenCells.length
}

Grid.prototype.takeCell = function(cell){
  switch(this.freeCell(cell)){
    case 'taken':
      break;
    default:
      this.takenCells.push(cell)
  }
  }

Grid.prototype.freeCell = function(cell){
  if (this.takenCells.indexOf(cell) > -1)
  {return 'taken'}
}
