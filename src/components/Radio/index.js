import React from 'react';
import './style.css';

const Radio = (props) => {
  return (
    <label className="form-label-radio">
      <input className='input-radio' name={props.radioName} type="radio" value={props.radioValue} />{props.text}
    </label>
  )
}

const InputRadio = () => {
  return (
    <>
      <p className='text-radio'>
        CADASTRO  DO (A):
      <span className='container-radio'>
        <Radio radioName='user' radioValue='0' text='ATENDIMENTO'/>
        <Radio radioName='user' radioValue='1' text='COZINHA'/>
      </span>
      </p>
    </>
  )
}

export default InputRadio;
