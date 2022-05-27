import React from 'react';
import './style.css';

const Radio = (props) => {
  return (
    <label className="form-label-radio">
      <input className='input-radio' name={props.name} type="radio" value={props.selectedValue} onChange={props.onChange} />{props.text}
    </label>
  )
}

export default Radio;
