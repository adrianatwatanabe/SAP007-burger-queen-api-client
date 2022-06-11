import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Link from '../../components/Link';
import Text from '../../components/Text'

const Management = () => {
  return (
    <>
      <Header text='MENU' />
      <Container>
        <Text class='text-menu'>
          SEÇÃO DE ADMINISTRAÇÃO:
        </Text>
        <Link href='/register' class='menu-button'>
          <p>CADASTRAR FUNCIONÁRIOS (AS)</p>
        </Link>
        <Link href='/employee' class='menu-button'>
          <p>LISTA DE FUNCIONÁRIOS (AS)</p>
        </Link>
        <Text class='text-menu'>
          SEÇÃO DE ATENDIMENTO E COZINHA:
        </Text>
        <Link href='/orders' class='menu-button'>
          <p>PEDIDOS</p>
        </Link>
        <Link href='/orders-progress' class='menu-button'>
          <p>PEDIDOS EM ANDAMENTO</p>
        </Link>
        <Link href='/delivery' class='menu-button'>
          <p>PEDIDOS ENTREGUES</p>
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default Management;
