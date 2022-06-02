import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Container from '../../components/Container';
import './style.css';

const Management = () => {
  return (
    <>
      <Header text='ADMINISTRAÇÃO' />
      <Container></Container>
      <Menu />
    </>
  );
};

export default Management;
