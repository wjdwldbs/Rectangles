const isRectangleContained = function (rectangle1, rectangle2) {

  let outerRectangle;
  let innerRectangle;

  if (rectangle1.bottomLeftX < rectangle2.bottomLeftX && rectangle1.bottomLeftY < rectangle2.bottomLeftY &&
    rectangle1.topRightX > rectangle2.topRightX && rectangle1.topRightY > rectangle2.topRightY){

    outerRectangle = rectangle1;
    innerRectangle = rectangle2;

  } else if (rectangle2.bottomLeftX < rectangle1.bottomLeftX && rectangle2.bottomLeftY < rectangle1.bottomLeftY &&
    rectangle2.topRightX > rectangle1.topRightX && rectangle2.topRightY > rectangle1.topRightY) {

    outerRectangle = rectangle2;
    innerRectangle = rectangle1;
    
  } else {

    return false;
  }

  if (innerRectangle.bottomLeftX > outerRectangle.bottomLeftX && innerRectangle.bottomLeftY > outerRectangle.bottomLeftY) {
    if (innerRectangle.topRightX < outerRectangle.topRightX && innerRectangle.topRightY < outerRectangle.topRightY) {
      return true;
    } 
  }

  //return false;
}

module.exports = isRectangleContained;
