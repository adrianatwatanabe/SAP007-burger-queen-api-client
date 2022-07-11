import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Link from '../../components/Link';
import Text from '../../components/Text'

const Menu = () => {
  return (
    <>
      <Header text='MENU' />
      <Container containerGeneral='containerGeneral' container='container'>
        <Text customClass='textMenu'>
          SEÇÃO DE ADMINISTRAÇÃO:
        </Text>
        <Link href='/register' customClass='menuButton'>
          CADASTRAR FUNCIONÁRIOS (AS)
        </Link>
        <Link href='/employee' customClass='menuButton'>
          LISTA DE FUNCIONÁRIOS (AS)
        </Link>
        <Text customClass='textMenu'>
          SEÇÃO DE ATENDIMENTO E COZINHA:
        </Text>
        <Link href='/orders' customClass='menuButton'>
          PEDIDOS
        </Link>
        <Link href='/orders-progress' customClass='menuButton'>
          PEDIDOS EM ANDAMENTO
        </Link>
        <Link href='/delivery' customClass='menuButton'>
          PEDIDOS ENTREGUES
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default Menu;
