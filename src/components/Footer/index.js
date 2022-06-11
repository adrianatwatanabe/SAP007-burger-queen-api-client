import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserData, deleteUserData } from '../../services/storage';

import OrdersList from '../../img/icons/orders-list.png';
import FinalizeOrders from '../../img/icons/finalize-orders.png';
import OrdersDelivered from '../../img/icons/orders-delivered.png';
import Logout from '../../img/icons/logout.png';
import Back from '../../img/icons/back.png';
import Button from '../Button';
import Link from '../Link';
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
            <Link href='/delivery' class='icon-button' >
              <img src={OrdersDelivered} alt='Ir para a seção de Pedidos Entregues' className='icon' />
            </Link>
            <Link href='/finish' class='icon-button' >
              <img src={FinalizeOrders} alt='Ir para a seção de Finalizar Pedidos' className='icon' />
            </Link>
            <Link href='/orders' class='icon-button' >
              <img src={OrdersList} alt='Ir para a seção de Pedidos' className='icon' />
            </Link>
          </>
        ) : null}
        {adminIcons !== (location.pathname === '/menu') ? (
          <Link href='/menu' class='icon-button' >
            <img src={Back} alt='Voltar para o Menu' className='icon' />
          </Link>
        ) : null}
      </ul>
    </nav>
  );
};

export default Footer;
