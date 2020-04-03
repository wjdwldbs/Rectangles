import React from 'react';
import Rectangles from './Rectangles.jsx';

class Canvas extends React.Component {
  constructor(){
    super();

    this.state = {
      drag: false,
      rectangles: [],
      canvas: null,
      ctx: null,
      startX: 0,     
      startY: 0,     
      width: 0,    
      height: 0,
      windowWidth: window.innerWidth
    }

    this.drawRectangle = this.drawRectangle.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        windowWidth: window.innerWidth
      })
    });

    this.state.canvas = this.refs.canvas;
    this.state.ctx = this.state.canvas.getContext('2d');
    this.state.canvas.width = 700;
    this.state.canvas.height = 500;
    this.state.ctx.lineWidth = 8;
  }

  componentWillUnmount() {
    window.addEventListener('resize', () => {
      this.setState({
        windowWidth: window.innerWidth
      })
    });
}

  drawRectangle() {

    this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);

    for (let i = 0; i < this.state.rectangles.length; i++){
      let currentRectangle = this.state.rectangles[i];

      this.state.ctx.beginPath()
      this.state.ctx.strokeStyle = "#000000";
      
      this.state.ctx.strokeRect(currentRectangle.startX, currentRectangle.startY, currentRectangle.width, currentRectangle.height);
      this.state.ctx.closePath();
    }

    this.state.ctx.strokeStyle = "#FF0000";
    this.state.ctx.strokeRect(this.state.startX, this.state.startY, this.state.width, this.state.height);
  }

  handleMouseDown(e) {
    if (this.state.rectangles.length >= 2){
      alert('Clear the canvas!');

    } else {
      this.setState({
        startX: (e.pageX - this.state.canvas.offsetLeft),
        startY: (e.pageY - this.state.canvas.offsetTop),
        drag: true
      })
    }
  }

  handleMouseUp() {
    let coordinates = {
      startX: this.state.startX,
      startY: this.state.startY,
      width: this.state.width,
      height: this.state.height
    }

    let rectangles = this.state.rectangles.concat(coordinates);
    this.setState({
      drag: false,
      rectangles: rectangles
    })
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

  clearCanvas(){
    this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
    this.setState({
      rectangles: []
    })
  }

  render(){
    return(
      <div id="container" style={{width: "1000px", margin:"0 auto"}}>
        <div style={{}}>
          <p>Drag mouse to create TWO rectangles then click RESULTS button on the right for detection</p>
          <button style={{fontSize:"15px"}} onClick={this.clearCanvas}>
            Clear Canvas
          </button>
        </div>

        <div >
          <div style={{display : 'inline-block', verticalAlign:"top"}}>
            <canvas ref="canvas" style={{border:"black solid 3px", margin:"10px", fontSize: "20px"}} 
              onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}>
            </canvas>
          </div>

          <div style={{display : this.state.windowWidth < 950 ? 'block' : 'inline-block', verticalAlign:"top"}}>
            <Rectangles id="sidebar" rectangles={this.state.rectangles}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Canvas;