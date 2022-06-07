import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserData, deleteUserData } from '../../services/storage';

import OrdersList from '../../img/icons/orders-list.png';
import FinalizeOrders from '../../img/icons/finalize-orders.png';
import OrdersDelivered from '../../img/icons/orders-delivered.png';
import Logout from '../../img/icons/logout.png';
import Back from '../../img/icons/back.png';
import Button from '../Button';
import ButtonLink from '../ButtonLink';
import './style.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let waiterIcons = getUserData()[2] === 'waiter';
  let adminIcons = getUserData()[2] === 'admin';

  const logout = (e) => {
    e.preventDefault();
    deleteUserData();
    navigate('/');
  };

  return (
    <nav id='footer-menu'>
      <ul className='list-container'>
        <Button type='submit' class='icon-button' onClick={logout} >
          <img src={Logout} alt='Sair da conta BURGER Queen' className='icon' />
        </Button>
        {waiterIcons ? (
          <>
            <ButtonLink href='/delivery' class='icon-button' >
              <img src={OrdersDelivered} alt='Ir para a seção de Pedidos Entregues' className='icon' />
            </ButtonLink>
            <ButtonLink href='/finish' class='icon-button' >
              <img src={FinalizeOrders} alt='Ir para a seção de Finalizar Pedidos' className='icon' />
            </ButtonLink>
            <ButtonLink href='/orders' class='icon-button' >
              <img src={OrdersList} alt='Ir para a seção de Pedidos' className='icon' />
            </ButtonLink>
          </>
        ) : null}
        {adminIcons !== (location.pathname === '/menu') ? (
          <ButtonLink href='/menu' class='icon-button' >
            <img src={Back} alt='Voltar para o Menu' className='icon' />
          </ButtonLink>
        ) : null}
      </ul>
    </nav>
  );
};

export default Footer;
