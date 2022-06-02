import React from 'react'
import './style.css';

const Icon = (props) => {
  return (
    <li>
      <button className='icon-button'>
        <img src={props.src} alt={props.alt} className={props.class}/>
      </button>
    </li>
  )
}

export default Icon;
