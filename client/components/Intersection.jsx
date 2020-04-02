import React from 'react';
import rectanglesIntersectAt from '../../functions/intersection.js';

class Intersection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      intersectingCoordinates: null,
      clicked: false,
      rectangle1: {},
      rectangle2: {},
      bottomLeftX1: null,
      bottomLeftY1: null,
      bottomLeftX2: null,
      bottomLeftY2: null,
      topRightX1: null,
      topRightY1: null,
      topRightX2: null,
      topRightY2: null,
      ready1: null
    }

    this.getIntersections = this.getIntersections.bind(this);
    this.getRectangleCoordinates = this.getRectangleCoordinates.bind(this);
  }

  getRectangleCoordinates(){

    for (let i = 0; i < this.props.rectangles.length; i++){
      let currentRectangle = this.props.rectangles[i];
      console.log(currentRectangle)
      // if (currentRectangle.startX > 0 && currentRectangle.startY > 0 && currentRectangle.width > 0 &&
      // currentRectangle.height > 0){
        if (i + 1 === 1){
          console.log(`width: ${currentRectangle.width}`)
          let y = 1
          this.setState({
            [`ready`+ y.toString] : 'hello',
            bottomLeftX1: currentRectangle.startX <= currentRectangle.startX + currentRectangle.width ? currentRectangle.startX : currentRectangle.startX + currentRectangle.width,
            bottomLeftY1: currentRectangle.startY <= currentRectangle.startY + currentRectangle.height ? currentRectangle.startY : currentRectangle.startY + currentRectangle.height,
            topRightX1: currentRectangle.startX > currentRectangle.startX + currentRectangle.width ? currentRectangle.startX : currentRectangle.startX + currentRectangle.width,
            topRightY1: currentRectangle.startY > currentRectangle.startY + currentRectangle.height ? currentRectangle.startY : currentRectangle.startY + currentRectangle.height
          }, () => console.log(`ready`, this.state.ready))      

        } else {
          console.log(`width2: ${currentRectangle.width}`)
          this.setState({
            bottomLeftX2: currentRectangle.startX <= currentRectangle.startX + currentRectangle.width ? currentRectangle.startX : currentRectangle.startX + currentRectangle.width,
            bottomLeftY2: currentRectangle.startY <= currentRectangle.startY + currentRectangle.height ? currentRectangle.startY : currentRectangle.startY + currentRectangle.height,
            topRightX2: currentRectangle.startX > currentRectangle.startX + currentRectangle.width ? currentRectangle.startX : currentRectangle.startX + currentRectangle.width,
            topRightY2: currentRectangle.startY > currentRectangle.startY + currentRectangle.height ? currentRectangle.startY : currentRectangle.startY + currentRectangle.height,
          }, () => this.getIntersections()) 
          }
    }    
  }

  getIntersections(){

    let rectangle1 = {}
    let rectangle2 = {}
    rectangle1.bottomLeftX = this.state.bottomLeftX1,
    rectangle1.bottomLeftY = this.state.bottomLeftY1,
    rectangle1.topRightX = this.state.topRightX1,
    rectangle1.topRightY = this.state.topRightY1
    
    console.log(`rec1: ${rectangle1.bottomLeftX}`)
    console.log(`rec1: ${rectangle1.bottomLeftY}`)
    console.log(`rec1: ${rectangle1.topRightX}`)
    console.log(`rec1: ${rectangle1.topRightY}`)
    
    rectangle2.bottomLeftX = this.state.bottomLeftX2,
    rectangle2.bottomLeftY = this.state.bottomLeftY2,
    rectangle2.topRightX = this.state.topRightX2,
    rectangle2.topRightY = this.state.topRightY2

    console.log(`rec2: ${rectangle2.bottomLeftX}`)
    console.log(`rec2: ${rectangle2.bottomLeftY}`)
    console.log(`rec2: ${rectangle2.topRightX}`)
    console.log(`rec2: ${rectangle2.topRightY}`)

    let coordinates = rectanglesIntersectAt(rectangle1, rectangle2)
    console.log(`coordinates: ${coordinates.length}`)
    this.setState({
      intersectingCoordinates: coordinates
    })
  }

  render(){
    return(
      <div>

        <button onClick={this.getRectangleCoordinates}>
          Intersection
        </button>

      <div>
        {this.state.intersectingCoordinates !== null &&
          <div>
              {this.state.intersectingCoordinates.map((intersectingCoordinate, i) => (
                <div key={i}>
                <span>{intersectingCoordinate[0]}{`, `}</span>
                <span>{intersectingCoordinate[1]}</span>
                </div>
              ))}
          </div>
        }
      </div>

        
      </div>
    )
  }
}

export default Intersection;