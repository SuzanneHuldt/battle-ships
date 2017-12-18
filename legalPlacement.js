

legalPlacement = function(oldCell, newCell){
  splitCell(newCell)
  var newNum = parseInt(dimensions[1])
  var newLetter = dimensions[0]
  var newLetter = newLetter.charCodeAt(0)

  splitCell(oldCell)
  var oldNum = parseInt(dimensions[1])
  var oldLetter = dimensions[0]
  var newLetter = oldLetter.charCodeAt(0)

  
}

splitCell = function(cell){
  return dimensions = cell.split(",")
}
