var rectanglesIntersectAt = function (rectangle1, rectangle2) {

  let x1 = Math.max(rectangle1.bottomLeftX, rectangle2.bottomLeftX)
  let y1 = Math.max(rectangle1.bottomLeftY, rectangle2.bottomLeftY)
 
  let x2 = Math.min(rectangle1.topLeftX, rectangle2.topLeftX)
  let y2 = Math.min(rectangle1.topLeftY, rectangle2.topLeftY)

  if (x1 > x2 || y1 > y2){
    return 'No Intersecting Points'
  }

  let intersectingCoordinates = [
    {x: x1, y: y1},
    {x: x2, y: y2},
    {x: x1, y: y2},
    {x: x2, y: y1}
  ]

  return intersectingCoordinates;
}

module.exports = rectanglesIntersectAt;