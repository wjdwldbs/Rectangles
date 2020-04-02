import React from 'react';

const Results = (props) => (
  <div style={{color:"#8B0000", fontWeight:"bold", fontSize:"15px"}}>
    <div style={{marginBottom:"10px"}}>
    INTERSECTING POINTS:
    {!props.intersectingCoordinates.length && 
      <span> None</span>
    }
    {props.intersectingCoordinates.map((intersectingCoordinate, i) => (
      <div key={i}>
        <span>x: {intersectingCoordinate[0]}, </span>
        <span>y: {intersectingCoordinate[1]}</span>
      </div>
    ))}
    </div>

    <div>
      <div style={{marginBottom:"10px"}}>CONTAINED: <span>{props.contained ? `Yes` : `No`}</span></div>
      <div>ADJACENT: <span>{props.adjacent ? `Yes` : `No`}</span></div>
    </div>
  </div>
)

export default Results;