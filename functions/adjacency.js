const rectanglesIntersectAt = require('./intersection.js');

var areRectanglesAdjacent = function (rectangle1, rectangle2) {
  let intersections = rectanglesIntersectAt(rectangle1, rectangle2);

  if (intersections.length === 2 && (intersections[0][0] === intersections[1][0])){
    return true;
  }

  return false;
};

module.exports = areRectanglesAdjacent;