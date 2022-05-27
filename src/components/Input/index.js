import React from 'react';
import './style.css';

const Input = (props) => {
  return (
    <label htmlFor={props.label} className="form-label">
      {props.text}
      <input type={props.type} id={props.id} className="form-input" placeholder={props.placeholder} onChange={props.onChange} required/>
    </label>
  )
}

export default Input;
