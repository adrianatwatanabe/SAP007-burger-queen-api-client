import React from 'react';
import './style.css';

const Text = (props) => {
  return (
    <p className={props.class}>
      {props.children}
    </p>
  );
}

export default Text;