import React from 'react';
import Intersection from './Intersection.jsx';

class Rectangle extends React.Component {
  constructor(){
    super();

    this.state = {
      drag: false,
      rectangles: [],
      canvas: null,
      ctx: null,
      startX: null,     
      startY: null,     
      width: null,    
      height: null,
    }

    this.drawRectangle = this.drawRectangle.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.state.canvas = this.refs.canvas;
    this.state.ctx = this.state.canvas.getContext('2d');
    this.state.canvas.width = 800,
    this.state.canvas.height = 550
  }

  drawRectangle() {
    this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);

    for (let i = 0; i < this.state.rectangles.length; i++){
      let currentRectangle = this.state.rectangles[i];
      this.state.ctx.strokeRect(currentRectangle.startX, currentRectangle.startY, currentRectangle.width, currentRectangle.height);
    }

    this.state.ctx.strokeRect(this.state.startX, this.state.startY, this.state.width, this.state.height);
  }

  handleMouseDown(e) {
    this.setState({
      startX: (e.pageX - this.state.canvas.offsetLeft),
      startY: (e.pageY - this.state.canvas.offsetTop),
      drag: true

    })
  }

  handleMouseUp() {
    this.setState({
      drag: false
    })

    let coordinates = {
      startX: this.state.startX,
      startY: this.state.startY,
      width: this.state.width,
      height: this.state.height
    }

    this.state.rectangles.push(coordinates);
    //console.log(this.state.rectangles)

  }

  handleMouseMove(e) {
    if (this.state.drag){
      this.setState({
        width: (e.pageX - this.state.canvas.offsetLeft) - this.state.startX,
        height:(e.pageY - this.state.canvas.offsetTop) - this.state.startY

      })
      this.drawRectangle();
    }
  }

  render(){
    return(
      <div id="container">
        <canvas ref="canvas" style={{border:"black solid 3px"}} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}></canvas>
        <div>
        <Intersection rectangles={this.state.rectangles}/>
        </div>
        
      </div>
    )
  }
}

export default Rectangle;