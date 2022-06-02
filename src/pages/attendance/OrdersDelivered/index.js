import React from 'react';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Container from '../../../components/Container';
import './style.css';

const OrdersDelivered = () => {
  return (
    <>
      <Header text='PEDIDOS ENTREGUES' />
      <Container></Container>
      <Menu />
    </>
  );
};

export default OrdersDelivered;
