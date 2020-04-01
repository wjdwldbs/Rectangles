import React from 'react';
import Rectangle from './Rectangle.jsx';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <div>
          draw rectangle
        </div>
        <Rectangle />
      </div>
    )
  }
}

export default App;