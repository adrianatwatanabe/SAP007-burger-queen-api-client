import React from 'react';
import Icon from '../MenuIcon'
import OrdersList from '../../img/icons/orders-list.png';
import FinalizeOrders from '../../img/icons/finalize-orders.png';
import OrdersDelivered from '../../img/icons/orders-delivered.png';
import Logout from '../../img/icons/logout.png';
import Back from '../../img/icons/back.png';
import './style.css';

const Menu = () => {

  let attendanceIcons = false;
  let adminIcons = false;

  return (
    <nav className='menu'>
      <ul className='list-container'>
        <Icon src={Logout} alt='Sair da conta BURGER Queen' class='icon' href='/' />
        { adminIcons ?
          <Icon src={Back} alt='Voltar para o Menu' class='icon' href='/administracao' />
          : null
        }
        { attendanceIcons ? 
          <>
            <Icon src={OrdersDelivered} alt='Ir para a seção de Pedidos Entregues' class='icon' href='/pedidos-entregues' />
            <Icon src={FinalizeOrders} alt='Ir para a seção de Finalizar Pedidos' class='icon' href='finalizar-pedido'/>
            <Icon src={OrdersList} alt='Ir para a seção de Pedidos' class='icon' href='/pedidos' />
          </> 
          : null
        }
      </ul>
    </nav>
  );
};

export default Menu;
