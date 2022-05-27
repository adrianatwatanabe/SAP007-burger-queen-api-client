import React from 'react';
import './style.css';

const Input = (props) => {
  return (
    <label htmlFor={props.labelFor} className="form-label">
      {props.text}
      <input type={props.inputType} id={props.inputId} className="form-input" placeholder={props.inputPlaceholder} required/>
    </label>
  )
}

export default Input;
