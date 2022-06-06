import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Button = (props) => {
  return (
    <NavLink to={props.href} className={props.classLink}>
      <button type={props.type} className={props.class} onClick={props.onClick}>
        {props.children}
      </button>
    </NavLink>
  );
}

export default Button;
