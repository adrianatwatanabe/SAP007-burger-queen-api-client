import React from 'react';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Container from '../../../components/Container';
import './style.css';

const Orders = () => {
  return (
    <>
      <Header text='PEDIDOS' />
      <Container></Container>
      <Menu />
    </>
  );
};

export default Orders;
