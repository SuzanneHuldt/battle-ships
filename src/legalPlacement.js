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
