import React from 'react';

const Results = (props) => (

  <div>
    {props.intersectingCoordinates.map((intersectingCoordinate, i) => (
      <div key={i}>
        <span>{intersectingCoordinate[0]}{`, `}</span>
        <span>{intersectingCoordinate[1]}</span>
      </div>
    ))}

    <div>
      <div>Contained: {props.contained ? `yes` : `no`}</div>
      <div>Adjacent: {props.adjacent ? `yes` : `no`}</div>
    </div>
  </div>
)

export default Results;