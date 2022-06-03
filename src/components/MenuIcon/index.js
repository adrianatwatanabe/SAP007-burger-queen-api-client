import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Icon = (props) => {

  return (
    <li>
      <NavLink to={props.href} className={props.classLink}>
        <img src={props.src} alt={props.alt} className={props.class} />
      </NavLink>
    </li>
  )
}

export default Icon;
