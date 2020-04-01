const isRectangleContained = function (rectangle1, rectangle2) {

  let outerRectangle;
  let innerRectangle;

  if (rectangle1.bottomLeftX < rectangle2.bottomLeftX && rectangle1.bottomLeftY < rectangle2.bottomLeftY &&
    rectangle1.topLeftX > rectangle2.topLeftX && rectangle1.topLeftY > rectangle2.topLeftY){

    outerRectangle = rectangle1;
    innerRectangle = rectangle2;

  } else if (rectangle2.bottomLeftX < rectangle1.bottomLeftX && rectangle2.bottomLeftY < rectangle1.bottomLeftY &&
    rectangle2.topLeftX > rectangle1.topLeftX && rectangle2.topLeftY > rectangle1.topLeftY) {

    outerRectangle = rectangle2;
    innerRectangle = rectangle1;
    
  } else {

    return false;
  }

  if (innerRectangle.bottomLeftX > outerRectangle.bottomLeftX && innerRectangle.bottomLeftY > outerRectangle.bottomLeftY) {
    if (innerRectangle.topLeftX < outerRectangle.topLeftX && innerRectangle.topLeftY < outerRectangle.topLeftY) {
      return true;
    } 
  }

  //return false;
}

module.exports = isRectangleContained;
