const expect = require('chai').expect;
const isRectangleContained = require('../functions/containment.js');

describe('isRectangleContained', function(){

  it('should return true if one input rectangle is wholly contained in the other', function(){

    let rec1 = {
      bottomLeftX: 0,
      bottomLeftY: 0,
      topRightX: 70,
      topRightY: 60
    }
    let rec2 = {
      bottomLeftX: 20,
      bottomLeftY: 10,
      topRightX: 50,
      topRightY: 40
    }

    expect(isRectangleContained(rec2, rec1)).to.be.true;
  });

  it ('should return false if one input rectangle is not contained in the other input rectangle', function(){
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

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });

  it('should return false if one input rectangle is contained in the other but one corner aligns', function(){

    let rec1 = {
      bottomLeftX: 10,
      bottomLeftY: 10,
      topRightX: 70,
      topRightY: 60
    }
    let rec2 = {
      bottomLeftX: 10,
      bottomLeftY: 10,
      topRightX: 50,
      topRightY: 40
    }

    expect(isRectangleContained(rec2, rec1)).to.be.false;
  });

  it('should return false if one input rectangle is contained in the other but one side aligns', function(){

    let rec1 = {
      bottomLeftX: 30,
      bottomLeftY: 40,
      topRightX: 70,
      topRightY: 60
    }
    let rec2 = {
      bottomLeftX: 40,
      bottomLeftY: 30,
      topRightX: 50,
      topRightY: 60
    }

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });

  it('should return false if input rectangles have same coordinates', function(){

    let rec1 = {
      bottomLeftX: 30,
      bottomLeftY: 40,
      topRightX: 70,
      topRightY: 60
    }
    let rec2 = {
      bottomLeftX: 30,
      bottomLeftY: 40,
      topRightX: 70,
      topRightY: 60
    }

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });

  it ('should return false if input rectangles intersect', function(){
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

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });

  it ('should return false if two input rectangles are adjacent', function(){
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

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });

  it ('should return false if input rectangles meet at one corner', function(){
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

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });
  
});