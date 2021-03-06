import React from 'react';
import Results from './Results.jsx';
import rectanglesIntersectAt from '../../functions/intersection';
import areRectanglesAdjacent from '../../functions/adjacency.js';
import isRectangleContained from '../../functions/containment.js';

class Rectangles extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      intersectingCoordinates: [],
      bottomLeftX1: null,
      bottomLeftY1: null,
      bottomLeftX2: null,
      bottomLeftY2: null,
      topRightX1: null,
      topRightY1: null,
      topRightX2: null,
      topRightY2: null,
      adjacent: null,
      contained: null
    }

    this.getResults = this.getResults.bind(this);
    this.getRectangleCoordinates = this.getRectangleCoordinates.bind(this);
  }

  getRectangleCoordinates(){
    if (this.props.rectangles.length < 2){
      alert('You need two rectangles to get results!');

    } else {
      for (let i = 0; i < this.props.rectangles.length; i++){
        let currentRectangle = this.props.rectangles[i];
      
          if (i + 1 === 1){
            this.setState({
              bottomLeftX1: currentRectangle.startX < currentRectangle.startX + currentRectangle.width ? currentRectangle.startX : currentRectangle.startX + currentRectangle.width,
              bottomLeftY1: currentRectangle.startY < currentRectangle.startY + currentRectangle.height ? currentRectangle.startY : currentRectangle.startY + currentRectangle.height,
              topRightX1: currentRectangle.startX > currentRectangle.startX + currentRectangle.width ? currentRectangle.startX : currentRectangle.startX + currentRectangle.width,
              topRightY1: currentRectangle.startY > currentRectangle.startY + currentRectangle.height ? currentRectangle.startY : currentRectangle.startY + currentRectangle.height
            })      
          
          } else {
            this.setState({
              bottomLeftX2: currentRectangle.startX < currentRectangle.startX + currentRectangle.width ? currentRectangle.startX : currentRectangle.startX + currentRectangle.width,
              bottomLeftY2: currentRectangle.startY < currentRectangle.startY + currentRectangle.height ? currentRectangle.startY : currentRectangle.startY + currentRectangle.height,
              topRightX2: currentRectangle.startX > currentRectangle.startX + currentRectangle.width ? currentRectangle.startX : currentRectangle.startX + currentRectangle.width,
              topRightY2: currentRectangle.startY > currentRectangle.startY + currentRectangle.height ? currentRectangle.startY : currentRectangle.startY + currentRectangle.height,
            }, () => this.getResults()) 
          }
      }  
    }  
  }

  getResults(){
    let rectangle1 = {}
    let rectangle2 = {}

    rectangle1.bottomLeftX = this.state.bottomLeftX1,
    rectangle1.bottomLeftY = this.state.bottomLeftY1,
    rectangle1.topRightX = this.state.topRightX1,
    rectangle1.topRightY = this.state.topRightY1

    rectangle2.bottomLeftX = this.state.bottomLeftX2,
    rectangle2.bottomLeftY = this.state.bottomLeftY2,
    rectangle2.topRightX = this.state.topRightX2,
    rectangle2.topRightY = this.state.topRightY2

    let coordinates = rectanglesIntersectAt(rectangle1, rectangle2);
    let adjacent = areRectanglesAdjacent(rectangle1, rectangle2);
    let contained = isRectangleContained(rectangle1, rectangle2);

    this.setState({
      intersectingCoordinates: coordinates,
      adjacent: adjacent,
      contained: contained
    })
  }

  render(){
    return(
      <div>
        <button style={{fontSize:"15px"}} onClick={this.getRectangleCoordinates}>
          RESULTS
        </button>

        <div>
          <div style={{}}> Rectangle1 Coordinates: </div>
              <p>top-leftX: {this.state.bottomLeftX1}</p>
              <p>top-leftY: {this.state.bottomLeftY1}</p>
              <p>bottom-rightX: {this.state.topRightX1}</p>
              <p>bottom-rightY: {this.state.topRightY1}</p>         
        </div>

        <div>
          <div> Rectangle2 Coordinates: </div>
              <p>top-leftX: {this.state.bottomLeftX2}</p>
              <p>top-leftY: {this.state.bottomLeftY2}</p>
              <p>bottom-rightX: {this.state.topRightX2}</p>
              <p>bottom-rightY: {this.state.topRightY2}</p>
          
        </div>

        <div>
        {this.state.intersectingCoordinates !== null && 
          <Results 
            intersectingCoordinates={this.state.intersectingCoordinates}
            contained={this.state.contained}
            adjacent={this.state.adjacent}
          />
        }
        </div>
      </div>
    )
  }
}

export default Rectangles;