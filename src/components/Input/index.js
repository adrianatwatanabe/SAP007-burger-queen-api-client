import React from 'react';
import './style.css';

const Input = (props) => {
  return (
    <label htmlFor={props.id} className={props.label}>
      {props.text}
      <input
        type={props.type}
        name={props.name}
        className={props.class}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Input;
