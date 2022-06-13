import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Grid from '../../components/Grid';
import './style.css';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FoodCard from '../../components/FoodCard';

const Orders = () => {
  const form = {
    table: '',
    name: '',
    payment: '',
  };
  const addInputValue = '';

  return (
    <>
      <Header text='PEDIDOS' />
      <Container>
        <Form class='form-orders'>
          <Input
            label='table-label'
            class='orders-input'
            name='table'
            value={form.table}
            text='MESA'
            type='text'
            placeholder='Digite o número da mesa'
            onChange={addInputValue}
          />
          <Input
            label='orders-label'
            class='orders-input'
            name='client'
            value={form.name}
            text='NOME DO CLIENTE'
            type='text'
            placeholder='Digite o nome do cliente'
            onChange={addInputValue}
          />
          <Text class='text-menu'>CARDÁPIO</Text>
          <Grid>
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </Grid>
          <Input
            label='orders-label'
            class='payment-input'
            name='payment'
            value={form.payment}
            text='TOTAL'
            type='number'
            placeholder={null}
            onChange={addInputValue}
            disabled="true"
          />
          <Grid class='register-button'>
            <Button href='#' type='button' class='cancell-button' onClick={null}>
              CANCELAR{' '}
            </Button>
            <Button href='#' type='submit' class='confirm-button' onClick={null}>
              FINALIZAR
            </Button>
          </Grid>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Orders;
