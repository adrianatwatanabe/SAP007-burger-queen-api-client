import React from 'react';
import './style.css';

const Radio = (props) => {
  const options = props.options;
  return (
    <>
      {options && options.map((option, index) => (
        <label className={props.label} key={option}>
          <input
            type='radio'
            role={option}
            className={props.class}
            name={props.name}
            value={option}
            onChange={props.onChange}
          />
          {props.text[index]}
        </label>
      ))}
    </>
  );
};

export default Radio;
