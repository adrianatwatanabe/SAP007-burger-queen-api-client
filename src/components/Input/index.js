import React from 'react';
import './style.css';

const Input = (props) => {
  return (
    <label className={props.label}>
      <p>{props.text}</p>
      <input
        type={props.type}
        name={props.name}
        className={props.class}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </label>
  );
};

export default Input;
