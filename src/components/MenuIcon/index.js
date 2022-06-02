import React from 'react'
import './style.css';

const Icon = (props) => {

  return (
    <li>
      <a className='icon-button' href={props.href}>
        <img src={props.src} alt={props.alt} className={props.class} />
      </a>
    </li>
  )
}

export default Icon;
