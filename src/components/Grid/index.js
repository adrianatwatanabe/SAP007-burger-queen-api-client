import React from 'react';
import './style.css';

const Grid = (props) => {
  return (
    <div className={props.class} role="grid">
      {props.children}
    </div>
  )
}

export default Grid;
