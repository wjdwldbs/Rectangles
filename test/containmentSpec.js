const expect = require('chai').expect;
const isRectangleContained = require('../functions/containment.js');

describe('isRectangleContained', function(){

  it('should return true if one input rectangle is wholly contained in the other', function(){

    let rec1 = {
      bottomLeftX: 0,
      bottomLeftY: 0,
      topLeftX: 70,
      topLeftY: 60
    }
    let rec2 = {
      bottomLeftX: 20,
      bottomLeftY: 10,
      topLeftX: 50,
      topLeftY: 40
    }

    expect(isRectangleContained(rec2, rec1)).to.be.true;
  });

  it ('should return false if one input rectangle is not contained in the other input rectangle', function(){
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

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });

  it('should return false if one input rectangle is contained in the other but one corner align with each other', function(){

    let rec1 = {
      bottomLeftX: 10,
      bottomLeftY: 10,
      topLeftX: 70,
      topLeftY: 60
    }
    let rec2 = {
      bottomLeftX: 10,
      bottomLeftY: 10,
      topLeftX: 50,
      topLeftY: 40
    }

    expect(isRectangleContained(rec2, rec1)).to.be.false;
  });

  it('should return false if one input rectangle is contained in the other but one side align with each other', function(){

    let rec1 = {
      bottomLeftX: 30,
      bottomLeftY: 40,
      topLeftX: 70,
      topLeftY: 60
    }
    let rec2 = {
      bottomLeftX: 40,
      bottomLeftY: 30,
      topLeftX: 50,
      topLeftY: 60
    }

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });

  it('should return false if input rectangles have same coordinates', function(){

    let rec1 = {
      bottomLeftX: 30,
      bottomLeftY: 40,
      topLeftX: 70,
      topLeftY: 60
    }
    let rec2 = {
      bottomLeftX: 30,
      bottomLeftY: 40,
      topLeftX: 70,
      topLeftY: 60
    }

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });

  it ('should return false if input rectangles intersect each other', function(){
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

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });

  it ('should return false if two input rectangles are adjacent', function(){
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

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });

  it ('should return false if input rectangles meet at one corner', function(){
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

    expect(isRectangleContained(rec1, rec2)).to.be.false;
  });
  
});