import React from 'react';
import Rectangle from './Rectangle.jsx';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <div style={{margin:"10px", fontSize: "20px"}}>
          Drag mouse to create rectangles
        </div>
        <Rectangle />
      </div>
    )
  }
}

export default App;