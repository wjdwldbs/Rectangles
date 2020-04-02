import React from 'react';

class Rectangle extends React.Component {
  constructor(){
    super();

    this.state = {
      drag: false,
      startX: null,     
      startY: null,     
      width: null,    
      height: null,
    }

    this.rectangles = [];
    this.canvas = null;
    this.ctx = null;
    this.drawRectangle = this.drawRectangle.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 800,
    this.canvas.height = 800
  }

  drawRectangle() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.rectangles.length; i++){
      let currentRectangle = this.rectangles[i];
      this.ctx.strokeRect(currentRectangle.startX, currentRectangle.startY, currentRectangle.width,currentRectangle.height);
    }


    this.ctx.strokeRect(this.state.startX, this.state.startY, this.state.width,this.state.height);
  }

  handleMouseDown(e) {
    this.setState({
      startX: (e.pageX - this.canvas.offsetLeft),
      startY: (e.pageY - this.canvas.offsetTop),
      drag: true
    })
    console.log(`rectangles: ${this.rectangles.length}`)
  }

  handleMouseUp() {
    this.setState({
      drag: false
    })

    this.rectangles.push(this.state)

  }

  handleMouseMove(e) {
    if (this.state.drag){
      this.setState({
        width: (e.pageX - this.canvas.offsetLeft) - this.state.startX,
        height:(e.pageY - this.canvas.offsetTop) - this.state.startY
      })
      this.drawRectangle();
    }
  }

  render(){
    return(
      <div id="container">
        <canvas ref="canvas" style={{border:"black solid 3px"}} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}></canvas>
      </div>
    )
  }
}

export default Rectangle;