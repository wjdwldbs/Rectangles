const expect = require('chai').expect;
const areRectanglesAdjacent = require('../functions/adjacency.js');

describe('areRectanglesAdjacent', function(){

  it('should return true if input rectangles have proper adjacency', function(){
    let rec1 = {
      bottomLeftX: 20,
      bottomLeftY: 20,
      topRightX: 100,
      topRightY: 50
    }
    let rec2 = {
      bottomLeftX: 100,
      bottomLeftY: 20,
      topRightX: 150,
      topRightY: 50
    }

    expect(areRectanglesAdjacent(rec1, rec2)).to.be.true;
  });

  it('should return true if input rectangles have sub-line adjacency', function(){
    let rec1 = {
      bottomLeftX: 0,
      bottomLeftY: 0,
      topRightX: 80,
      topRightY: 60
    }
    let rec2 = {
      bottomLeftX: 80,
      bottomLeftY: 20,
      topRightX: 150,
      topRightY: 40
    }

    expect(areRectanglesAdjacent(rec2, rec1)).to.be.true;
  });

  it('should return true if input rectangles have partial adjacency', function(){
    let rec1 = {
      bottomLeftX: 40,
      bottomLeftY: 30,
      topRightX: 90,
      topRightY: 90
    }
    let rec2 = {
      bottomLeftX: 90,
      bottomLeftY: 60,
      topRightX: 150,
      topRightY: 200
    }

    expect(areRectanglesAdjacent(rec1, rec2)).to.be.true;
  });

  it ('should return false if input rectangles are not adjacent', function(){
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

    expect(areRectanglesAdjacent(rec1, rec2)).to.be.false;
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

    expect(areRectanglesAdjacent(rec2, rec1)).to.be.false;
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

    expect(areRectanglesAdjacent(rec2, rec1)).to.be.false;
  });

  it ('should return false if input rectangles share one side but are not adjacent', function(){
    let rec1 = {
      bottomLeftX: 80,
      bottomLeftY: 40,
      topRightX: 250,
      topRightY: 100
    }
    let rec2 = {
      bottomLeftX: 80,
      bottomLeftY: 100,
      topRightX: 250,
      topRightY: 150
    }
    
    expect(areRectanglesAdjacent(rec1, rec2)).to.be.false;
  });
});