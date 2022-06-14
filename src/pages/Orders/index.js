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
import { getAllProducts } from '../../services/products';

const Orders = () => {
  const form = {
    table: '',
    name: '',
    payment: '',
  };
  const addInputValue = '';

  getAllProducts()
  .then((data) => console.log(data));

  return (
    <>
      <Header text='PEDIDOS' />
      <Container>
        <Form class='form-orders'>
          <Input
            label='table-label'
            class='orders-input table-input'
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
          <Text class='text-menu text-orders'>CARDÁPIO</Text>
          <Grid class='option-container'>
            <Button type='button' class='option-button' onClick={null}>CAFÉ DA MANHÃ</Button>
            <Button type='button' class='option-button' onClick={null}>HAMBÚRGUERES</Button>
            <Button type='button' class='option-button' onClick={null}>PORÇÕES</Button>
            <Button type='button' class='option-button' onClick={null}>BEBIDAS</Button>
          </Grid>
          <Grid class='sub-option-container'>
            <Button type='button' class='sub-option-button' onClick={null}>CARNE</Button>
            <Button type='button' class='sub-option-button' onClick={null}>FRANGO</Button>
            <Button type='button' class='sub-option-button' onClick={null}>VEGETARIANO</Button>
          </Grid>
          <Grid class="menu-section">
            <FoodCard text="HAMBURGUER EXTRA GRANDE" counter="05" total="35,00" complement='queijo'/>
          </Grid>
          <Input
            label='payment-label'
            class='payment-input'
            name='payment'
            value={form.payment}
            text='TOTAL'
            type='number'
            placeholder='0,00'
            onChange={addInputValue}
            disabled="false"
          />
          <Grid class='register-button'>
            <Button type='button' class='cancell-button' onClick={null}>
              CANCELAR
            </Button>
            <Button type='submit' class='confirm-button' onClick={null}>
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
