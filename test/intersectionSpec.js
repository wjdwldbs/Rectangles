const expect = require('chai').expect;
const rectanglesIntersectAt = require('../functions/intersection.js');

describe('rectanglesIntersectAt', function(){

  it ('should return four points of intersection if input rectangles have same coordinates', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topLeftX: 100,
      topLeftY: 50
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
  })

  it ('should return four points of intersection if input rectangles crisscross each other', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topLeftX: 100,
      topLeftY: 50
    }
    let rec2 = {
      bottomLeftX: 30,
      bottomLeftY: 10,
      topLeftX: 80,
      topLeftY: 70
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
  })

  it ('should return two points of intersection if one of the input rectangles intersect at one side of the other input rectangle', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topLeftX: 100,
      topLeftY: 50
    }
    let rec2 = {
      bottomLeftX: 40,
      bottomLeftY: 0,
      topLeftX: 80,
      topLeftY: 30
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
  })

  it ('should return two points of intersection if input rectangles are adjoined', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topLeftX: 100,
      topLeftY: 50
    }
    let rec2 = {
      bottomLeftX: 30,
      bottomLeftY: 50,
      topLeftX: 80,
      topLeftY: 100
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
  })

  it ('should return one point of intersection if input rectangles meet at one corner', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topLeftX: 100,
      topLeftY: 50
    }
    let rec2 = {
      bottomLeftX: 100,
      bottomLeftY: 50,
      topLeftX: 150,
      topLeftY: 100
    }

    let intersections = rectanglesIntersectAt(rec2, rec1);

    expect(intersections.length).to.equal(1);
    expect(intersections[0][0]).to.equal(100);
    expect(intersections[0][1]).to.equal(50);
  })

  it ('should not return any points of coordinates if input rectangles do not intersect', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topLeftX: 100,
      topLeftY: 50
    }
    let rec2 = {
      bottomLeftX: 200,
      bottomLeftY: 80,
      topLeftX: 340,
      topLeftY: 160
    }

    let intersections = rectanglesIntersectAt(rec1, rec2);

    expect(intersections.length).to.equal(0);
  })

  it ('should not return points of intersection if an input rectangle is contained within the other input rectangle', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topLeftX: 100,
      topLeftY: 50
    }
    let rec2 = {
      bottomLeftX: 30,
      bottomLeftY: 30,
      topLeftX: 80,
      topLeftY: 40
    }

    let intersections = rectanglesIntersectAt(rec2, rec1);
    expect(intersections.length).to.equal(0)
  })

  it ('should not return any points of intersection if two input rectangles are adjacent', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topLeftX: 100,
      topLeftY: 50
    }
    let rec2 = {
      bottomLeftX: 100,
      bottomLeftY: 0,
      topLeftX: 150,
      topLeftY: 30
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
  })

  it ('should return three points of intersection if input rectangles are aligned in one corner', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topLeftX: 100,
      topLeftY: 50
    }
    let rec2 = {
      bottomLeftX: 20,
      bottomLeftY: 40,
      topLeftX: 50,
      topLeftY: 50
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
  })

  it ('should return four points of intersection if one input rectangle contain the other input rectangle and one pair parelle sides aligned with each other ', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topLeftX: 100,
      topLeftY: 50
    }
    let rec2 = {
      bottomLeftX: 20,
      bottomLeftY: 30,
      topLeftX: 100,
      topLeftY: 40
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
  })

})