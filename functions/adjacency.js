var areRectanglesAdjacent = function (rectangle1, rectangle2) {

  if (rectangle2.bottomLeftX === rectangle1.topRightX){
    if (rectangle2.bottomLeftY >= rectangle1.bottomLeftY && rectangle2.bottomLeftY < rectangle1.topRightY){
      return true;
    }
  } 

  if (rectangle1.bottomLeftX === rectangle2.topRightX){
    if (rectangle1.bottomLeftY >= rectangle2.bottomLeftY && rectangle1.bottomLeftY < rectangle2.topRightY){
      return true;
    }
  }

  return false;

};

module.exports = areRectanglesAdjacent;