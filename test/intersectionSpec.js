const expect = require('chai').expect;
const rectanglesIntersectAt = require('../functions/intersection.js');

describe('rectanglesIntersectAt', function(){

  it ('should return four points of intersection if input rectangles have same coordinates', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }

    let intersections = rectanglesIntersectAt(rec1, rec1);
    let expectedResult = [[20, 20], [100, 50], [20, 50], [100, 20]];
    let correctResult = true;

    if (intersections.length !== expectedResult.length){
      correctResult = false;
    } else {
      for (let i = 0; i < expectedResult.length; i++){
        if (expectedResult[i][0] !== intersections[i][0] || expectedResult[i][1] !== intersections[i][1]){
          correctResult = false;
          break;
        } 
      }
    }

    expect(correctResult).to.be.true;
  });

  it ('should return four points of intersection if input rectangles crisscross', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }
    let rec2 = {
      bottomLeftX: 30,
      bottomLeftY: 10,
      topRightX: 80,
      topRightY: 70
    }

    let intersections = rectanglesIntersectAt(rec2, rec1);
    let expectedResult = [[30, 20], [80, 50], [30, 50], [80, 20]];
    let correctResult = true;

    if (intersections.length !== expectedResult.length){
      correctResult = false;
    } else {
      for (let i = 0; i < expectedResult.length; i++){
        if (expectedResult[i][0] !== intersections[i][0] || expectedResult[i][1] !== intersections[i][1]){
          correctResult = false;
          break;
        } 
      }
    }

    expect(correctResult).to.be.true;
  });

  it ('should return two points of intersection if one of the input rectangles intersect at one side of the other input rectangle', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }
    let rec2 = {
      bottomLeftX: 40,
      bottomLeftY: 0,
      topRightX: 80,
      topRightY: 30
    }

    let intersections = rectanglesIntersectAt(rec1, rec2);
    let expectedResult = [[40, 20], [80, 20]];
    let correctResult = true;

    if (intersections.length !== expectedResult.length){
      correctResult = false;
    } else {
      for (let i = 0; i < expectedResult.length; i++){
        if (expectedResult[i][0] !== intersections[i][0] || expectedResult[i][1] !== intersections[i][1]){
          correctResult = false;
          break;
        } 
      }
    }

    expect(correctResult).to.be.true;
  });

  it ('should return two points of intersection if input rectangles are adjoined', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }
    let rec2 = {
      bottomLeftX: 30,
      bottomLeftY: 50,
      topRightX: 80,
      topRightY: 100
    }

    let intersections = rectanglesIntersectAt(rec1, rec2);
    let expectedResult = [[30, 50], [80, 50]];
    let correctResult = true;

    if (intersections.length !== expectedResult.length){
      correctResult = false;
    } else {
      for (let i = 0; i < expectedResult.length; i++){
        if (expectedResult[i][0] !== intersections[i][0] || expectedResult[i][1] !== intersections[i][1]){
          correctResult = false;
          break;
        } 
      }
    }

    expect(correctResult).to.be.true;
  });

  it ('should return one point of intersection if input rectangles meet at one corner', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }
    let rec2 = {
      bottomLeftX: 100,
      bottomLeftY: 50,
      topRightX: 150,
      topRightY: 100
    }

    let intersections = rectanglesIntersectAt(rec2, rec1);

    expect(intersections.length).to.equal(1);
    expect(intersections[0][0]).to.equal(100);
    expect(intersections[0][1]).to.equal(50);
  });

  it ('should not return any points of coordinates if input rectangles do not intersect', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }
    let rec2 = {
      bottomLeftX: 200,
      bottomLeftY: 80,
      topRightX: 340,
      topRightY: 160
    }

    let intersections = rectanglesIntersectAt(rec1, rec2);

    expect(intersections.length).to.equal(0);
  });

  it ('should not return points of intersection if an input rectangle is contained within the other input rectangle', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }
    let rec2 = {
      bottomLeftX: 30,
      bottomLeftY: 30,
      topRightX: 80,
      topRightY: 40
    }

    let intersections = rectanglesIntersectAt(rec2, rec1);
    expect(intersections.length).to.equal(0)
  });

  it ('should not return any points of intersection if two input rectangles are adjacent', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }
    let rec2 = {
      bottomLeftX: 100,
      bottomLeftY: 0,
      topRightX: 150,
      topRightY: 30
    }

    let intersections = rectanglesIntersectAt(rec1, rec2);
    let expectedResult = [[100, 30], [100, 20]];
    let correctResult = true;

    if (intersections.length !== expectedResult.length){
      correctResult = false;
    } else {
      for (let i = 0; i < expectedResult.length; i++){
        if (expectedResult[i][0] !== intersections[i][0] || expectedResult[i][1] !== intersections[i][1]){
          correctResult = false;
          break;
        } 
      }
    }

    expect(correctResult).to.be.true;
  });

  it ('should return three points of intersection if input rectangles align in one corner', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }
    let rec2 = {
      bottomLeftX: 20,
      bottomLeftY: 40,
      topRightX: 50,
      topRightY: 50
    }

    let intersections = rectanglesIntersectAt(rec2, rec1);
    let expectedResult = [[20, 40], [50, 50], [20, 50]];
    let correctResult = true;

    if (intersections.length !== expectedResult.length){
      correctResult = false;
    } else {
      for (let i = 0; i < expectedResult.length; i++){
        if (expectedResult[i][0] !== intersections[i][0] || expectedResult[i][1] !== intersections[i][1]){
          correctResult = false;
          break;
        } 
      }
    }

    expect(correctResult).to.be.true;
  });

  it ('should return four points of intersection if one input rectangle contain the other input rectangle and one pair of parellel sides aligns', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }
    let rec2 = {
      bottomLeftX: 20,
      bottomLeftY: 30,
      topRightX: 100,
      topRightY: 40
    }

    let intersections = rectanglesIntersectAt(rec2, rec1);
    let expectedResult = [[20, 30], [100, 40], [20, 40], [100, 30]];
    let correctResult = true;

    if (intersections.length !== expectedResult.length){
      correctResult = false;
    } else {
      for (let i = 0; i < expectedResult.length; i++){
        if (expectedResult[i][0] !== intersections[i][0] || expectedResult[i][1] !== intersections[i][1]){
          correctResult = false;
          break;
        } 
      }
    }

    expect(correctResult).to.be.true;
  });

});