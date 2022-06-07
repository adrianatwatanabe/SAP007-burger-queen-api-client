import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserData, deleteUserData } from '../../services/storage';

import OrdersList from '../../img/icons/orders-list.png';
import FinalizeOrders from '../../img/icons/finalize-orders.png';
import OrdersDelivered from '../../img/icons/orders-delivered.png';
import Logout from '../../img/icons/logout.png';
import Back from '../../img/icons/back.png';
import Button from '../Button';
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
        <Button href='/home' classLink={null} class='icon-button' onClick={logout}>
          <img src={Logout} alt='Sair da conta BURGER Queen' className='icon' />
        </Button>
        {waiterIcons ? (
          <>
            <Button href='/delivery' classLink={null} class='icon-button' onClick={null}>
              <img src={OrdersDelivered} alt='Ir para a seção de Pedidos Entregues' className='icon' />
            </Button>
            <Button href='/finish' classLink={null} class='icon-button' onClick={null}>
              <img src={FinalizeOrders} alt='Ir para a seção de Finalizar Pedidos' className='icon' />
            </Button>
            <Button href='/orders' classLink={null} class='icon-button' onClick={null}>
              <img src={OrdersList} alt='Ir para a seção de Pedidos' className='icon' />
            </Button>
          </>
        ) : null}
        {adminIcons !== (location.pathname === '/menu') ? (
          <Button href='/menu' classLink={null} class='icon-button' onClick={null}>
            <img src={Back} alt='Voltar para o Menu' className='icon' />
          </Button>
        ) : null}
      </ul>
    </nav>
  );
};

export default Footer;
