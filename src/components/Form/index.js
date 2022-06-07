import React from 'react';
import './style.css';

const Form = (props) => {
  return (
    <form className={props.class}>
      {props.children}
    </form>
  )
}

export default Form
