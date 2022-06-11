import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Link = (props) => {
  return (
    <NavLink to={props.href} className={props.class}>
      {props.children}
    </NavLink>
  );
}

export default Link;