import React from 'react';
import './style.css';
import logoBurgerQueen from '../../img/logo-burger-queen.png';

const Logo = (props) => {
  return (
    <picture>
      <img src={logoBurgerQueen} alt='Logotipo BURGER Queen' className={props.class} />
    </picture>
  );
}

export default Logo;
