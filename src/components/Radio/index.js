import React from 'react';
import './style.css';

const Radio = (props) => {
  return (
    <>
      {props.options.map((option, index) => (
        <label className={props.label} key={option}>
          <input
            type='radio'
            className={props.class}
            value={option}
            checked={props.value === option}
            onChange={({ target }) => props.setValue(target.value)}
          />
          {props.text[index]}
        </label>
      ))}
    </>
  );
};

export default Radio;
