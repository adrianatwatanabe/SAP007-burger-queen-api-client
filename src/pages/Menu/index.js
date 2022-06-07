import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import ButtonLink from '../../components/ButtonLink';
import Text from '../../components/Text'

const Management = () => {
  return (
    <>
      <Header text='MENU' />
      <Container>
        <Text class='text-menu'>
          SEÇÃO DE ADMINISTRAÇÃO:
        </Text>
        <ButtonLink href='/register' class='menu-button'>
          CADASTRAR FUNCIONÁRIOS (AS)
        </ButtonLink>
        <ButtonLink href='/employee' class='menu-button'>
          LISTA DE FUNCIONÁRIOS (AS)
        </ButtonLink>
        <Text class='text-menu'>
          SEÇÃO DE ATENDIMENTO E COZINHA:
        </Text>
        <ButtonLink href='/orders' class='menu-button'>
          PEDIDOS
        </ButtonLink>
        <ButtonLink href='/orders-progress' class='menu-button'>
          PEDIDOS EM ANDAMENTO
        </ButtonLink>
        <ButtonLink href='/delivery' class='menu-button'>
          PEDIDOS ENTREGUES
        </ButtonLink>
      </Container>
      <Footer />
    </>
  );
};

export default Management;
