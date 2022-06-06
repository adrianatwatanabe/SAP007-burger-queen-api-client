import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Text from '../../components/Text'

const Management = () => {
  return (
    <>
      <Header text='MENU' />
      <Container>
        <Text class='text-menu'>
          SEÇÃO DE ADMINISTRAÇÃO:
        </Text>
        <Button href='/register' classLink='button-link' type='button' class='menu-button' onClick={null}>
          CADASTRAR FUNCIONÁRIOS (AS)
        </Button>
        <Button href='/employee' classLink='button-link' type='button' class='menu-button' onClick={null}>
          LISTA DE FUNCIONÁRIOS (AS)
        </Button>
        <Text class='text-menu'>
          SEÇÃO DE ATENDIMENTO E COZINHA:
        </Text>
        <Button href='/orders' classLink='button-link' type='button' class='menu-button' onClick={null}>
          PEDIDOS
        </Button>
        <Button href='/orders-progress' classLink='button-link' type='button' class='menu-button' onClick={null}>
          PEDIDOS EM ANDAMENTO
        </Button>
        <Button href='/delivery' classLink='button-link' type='button' class='menu-button' onClick={null}>
          PEDIDOS ENTREGUES
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default Management;
