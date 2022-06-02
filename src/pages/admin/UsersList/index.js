import React from 'react';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Container from '../../../components/Container';
import './style.css';

const UsersList = () => {
  return (
    <>
      <Header text='LISTA DE FUNCIONÁRIOS' />
      <Container></Container>
      <Menu />
    </>
  );
};

export default UsersList;

