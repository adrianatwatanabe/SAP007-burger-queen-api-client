import React from 'react';
import './style.css';

const Button = (props) => {
  return (
    <button type={props.type} className={props.class} onClick={props.onClick} role={props.role}>
      {props.children}
    </button>
  );
};

export default Button;
