import React from 'react';
import Logo from '../Logo';
import './style.css';

const Header = (props) => {
  return (
    <header id='container-header-general'>
      <div id='container-header'>
        <Logo class='login-header'/>
        <p className='header-text'>{props.text}</p>
      </div>
    </header>
  );
}

export default Header;
