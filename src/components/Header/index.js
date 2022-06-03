import React from 'react';
import './style.css';
import Logo from '../Logo';

const Header = (props) => {
  return (
    <header className='container-header'>
      <Logo />
      <p className='header-text'>{props.text}</p>
    </header>
  );
}

export default Header;
