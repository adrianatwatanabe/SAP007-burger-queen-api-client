import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Container from '../../components/Container';
import './style.css';

const OrdersProgress = () => {
  return (
    <>
      <Header text='PEDIDOS EM ANDAMENTO' />
      <Container></Container>
      <Menu />
    </>
  );
};

export default OrdersProgress;
