import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import './style.css';

const OrdersProgress = () => {
  return (
    <>
      <Header text='PEDIDOS EM ANDAMENTO' />
      <Container></Container>
      <Footer />
    </>
  );
};

export default OrdersProgress;
