import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Grid from '../../components/Grid';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FoodCard from '../../components/FoodCard';
import { getAllProducts } from '../../services/products';

const Orders = () => {
  const [subMenu, setSubMenu] = React.useState(false);
  const [sortProducts, setSortProducts] = React.useState([]);
  const [products,] = React.useState([]);
  const [refleshMenu, setRefleshMenu] = React.useState(false);

  React.useEffect(() => {
    getProducts();
    async function getProducts() {
      const azProducts = await getAllProducts();
      return setSortProducts(azProducts);
    }
  }, []);

  const loadMenu = (option) => {
    option === 'hamburguer' ? setSubMenu(true) : setSubMenu(false);
    sortProducts.forEach((item) => {
      if (item.sub_type === option) products.push(item);
      return setRefleshMenu(true);
    });    
  };

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
            <Button type='button' class='option-button' onClick={(e) => { e.preventDefault(); loadMenu('breakfast'); }}>
              CAFÉ DA MANHÃ
            </Button>
            <Button type='button' class='option-button' onClick={(e) => { e.preventDefault(); loadMenu('hamburguer'); }}>
              HAMBÚRGUERES
            </Button>
            <Button type='button' class='option-button' onClick={(e) => { e.preventDefault(); loadMenu('side'); }}>
              PORÇÕES
            </Button>
            <Button type='button' class='option-button' onClick={(e) => { e.preventDefault(); loadMenu('drinks'); }}>
              BEBIDAS
            </Button>
          </Grid>
          {subMenu && (
            <Grid class='sub-option-container'>
              <Button type='button' class='sub-option-button' onClick={null}>
                CARNE
              </Button>
              <Button type='button' class='sub-option-button' onClick={null}>
                FRANGO
              </Button>
              <Button type='button' class='sub-option-button' onClick={null}>
                VEGETARIANO
              </Button>
            </Grid>
          )}
          <Grid class='menu-section'>
            {refleshMenu && (
              <FoodCard text='HAMBURGUER EXTRA GRANDE' counter='05' total='35,00' complement='queijo' />
            )}
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
            disabled='false'
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
