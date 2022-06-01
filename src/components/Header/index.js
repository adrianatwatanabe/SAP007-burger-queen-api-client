import React from 'react';
import './style.css';
import logoBurgerQueen from '../../img/logo-burger-queen.png';

function Header(props) {
  return (
    <header className='container-header'>
      <picture>
        <img src={logoBurgerQueen} alt='Logotipo BURGER Queen' className='header-logo' />
      </picture>
      <p className='header-text'>{props.text}</p>
    </header>
  );
}

export default Header;
