import React from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../MenuIcon'
import { getUserData } from '../../services/storage';
import OrdersList from '../../img/icons/orders-list.png';
import FinalizeOrders from '../../img/icons/finalize-orders.png';
import OrdersDelivered from '../../img/icons/orders-delivered.png';
import Logout from '../../img/icons/logout.png';
import Back from '../../img/icons/back.png';
import './style.css';

const Menu = () => {
  const location = useLocation();
  const page = location.pathname === '/menu';
  let waiterIcons = (getUserData()[2] === 'waiter');
  let adminIcons = (getUserData()[2] === 'admin');

  return (
    <nav className='menu'>
      <ul className='list-container'>
        <Icon src={Logout} alt='Sair da conta BURGER Queen' classLink='icon-button' class='icon' href='/finish' />
        { adminIcons !== page ?
          <Icon src={Back} alt='Voltar para o Menu' classLink='icon-button' class='icon' href='/menu' />
          : null
        }
        { waiterIcons ? 
          <>
            <Icon src={OrdersDelivered} alt='Ir para a seção de Pedidos Entregues' classLink='icon-button' class='icon' href='/delivery' />
            <Icon src={FinalizeOrders} alt='Ir para a seção de Finalizar Pedidos' classLink='icon-button' class='icon' href='finalizar-pedido'/>
            <Icon src={OrdersList} alt='Ir para a seção de Pedidos' classLink='icon-button' class='icon' href='/orders' />
          </> 
          : null
        }
      </ul>
    </nav>
  );
};

export default Menu;
