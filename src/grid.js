function Grid(){
  this.takenCells = []
}
// remember cypress tests for interface as well as unit tests!
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

Grid.prototype.fireOnCell = function(cell){
  switch(this.freeCell(cell)){
    case 'taken':
      this.hitCell(cell)
      return 'hit';
    default:
      'miss';
  }
}

Grid.prototype.hitCell = function(cell){
  for(var i in this.takenCells){
    if(this.takenCells[i] === cell){
      this.takenCells.splice(i,1)
    }
  }
}
