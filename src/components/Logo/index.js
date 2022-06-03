import React from 'react';
import './style.css';
import logoBurgerQueen from '../../img/logo-burger-queen.png';

const Logo = () => {
  return (
    <picture>
      <img src={logoBurgerQueen} alt='Logotipo BURGER Queen' className='logo' />
    </picture>
  );
}

export default Logo;
