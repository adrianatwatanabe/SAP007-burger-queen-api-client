import React from 'react';
import './style.css';

const Button = (props) => {
  return (
    <button type={props.type} className={props.class} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
