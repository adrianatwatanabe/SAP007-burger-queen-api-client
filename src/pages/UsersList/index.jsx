import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import './style.css';

const UsersList = () => {
  return (
    <>
      <Header text='LISTA DE FUNCIONÁRIOS (AS)' />
      <Container></Container>
      <Footer />
    </>
  );
};

export default UsersList;

