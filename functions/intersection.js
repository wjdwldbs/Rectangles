const rectanglesIntersectAt = function (rectangle1, rectangle2) {

  let x1 = Math.max(rectangle1.bottomLeftX, rectangle2.bottomLeftX);
  let y1 = Math.max(rectangle1.bottomLeftY, rectangle2.bottomLeftY);
 
  let x2 = Math.min(rectangle1.topRightX, rectangle2.topRightX);
  let y2 = Math.min(rectangle1.topRightY, rectangle2.topRightY);

  if ((x1 > x2 || y1 > y2)){
    return [];
  }

  let coordinates = {
    x1y1: [x1, y1],
    x2y2: [x2, y2],
    x1y2: [x1, y2],
    x2y1: [x2, y1]
  }

  if (coordinates.x1y1[0] === coordinates.x2y2[0] && coordinates.x1y1[1] === coordinates.x2y2[1] ||
      coordinates.x1y1[0] === coordinates.x1y2[0] && coordinates.x1y1[1] === coordinates.x1y2[1] ||
      coordinates.x1y1[0] === coordinates.x2y1[0] && coordinates.x1y1[1] === coordinates.x2y1[1]) {

      delete coordinates.x1y1;
  }

  if (coordinates.x2y2[0] === coordinates.x1y2[0] && coordinates.x2y2[1] === coordinates.x1y2[1] ||
      coordinates.x2y2[0] === coordinates.x2y1[0] && coordinates.x2y2[1] === coordinates.x2y1[1]) {
      
      delete coordinates.x2y2;
  }

  if (coordinates.x1y2[0] === coordinates.x2y1[0] && coordinates.x1y2[1] === coordinates.x2y1[1]) {

      delete coordinates.x1y2;
  }

  let intersectingCoordinates = [];

  for (let coordinate in coordinates){
    let currentCoordinate = coordinates[coordinate];

    if ((currentCoordinate[0] === rectangle1.bottomLeftX || currentCoordinate[0] === rectangle1.topRightX) && 
       (currentCoordinate[1] === rectangle2.bottomLeftY || currentCoordinate[1] === rectangle2.topRightY)) {

      intersectingCoordinates.push(currentCoordinate);
      
    } else if ((currentCoordinate[0] === rectangle2.bottomLeftX || currentCoordinate[0] === rectangle2.topRightX) && 
      (currentCoordinate[1] === rectangle1.bottomLeftY || currentCoordinate[1] === rectangle1.topRightY)) {

      intersectingCoordinates.push(currentCoordinate);
    }
  }
  
  return intersectingCoordinates;
};

module.exports = rectanglesIntersectAt;