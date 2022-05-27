import React from 'react';
import './style.css';

function Button(props) {
  return (
    <button type={props.type} id={props.id} className="button">
      {props.text}
    </button>
  )
}

export default Button;
