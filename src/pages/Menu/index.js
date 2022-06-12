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
          CADASTRAR FUNCIONÁRIOS (AS)
        </Link>
        <Link href='/employee' class='menu-button'>
          LISTA DE FUNCIONÁRIOS (AS)
        </Link>
        <Text class='text-menu'>
          SEÇÃO DE ATENDIMENTO E COZINHA:
        </Text>
        <Link href='/orders' class='menu-button'>
          PEDIDOS
        </Link>
        <Link href='/orders-progress' class='menu-button'>
          PEDIDOS EM ANDAMENTO
        </Link>
        <Link href='/delivery' class='menu-button'>
          PEDIDOS ENTREGUES
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default Management;
