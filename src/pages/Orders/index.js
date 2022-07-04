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
  const [products, setProducts] = React.useState([]);
  const [refleshMenu, setRefleshMenu] = React.useState(false);
  const [counter, setCounter] = React.useState([]);

  React.useEffect(() => {
    getProducts();
    async function getProducts() {
      const azProducts = await getAllProducts();
      return setSortProducts(azProducts);
    }
  }, []);

  const showProducts = (option) => {
    setSubMenu(false);
    setProducts(sortProducts.filter((item) => item.sub_type === option));
    setRefleshMenu(true);
  };

  const showHamburguer = (option) => {
    setSubMenu(true);
    setProducts(sortProducts.filter((item) => item.flavor === option));
    setRefleshMenu(true);
  };

  const productCounter = (idProduct, action) => {
    //add or remove
    let counterNumber = 0;
    let indexCounter = 0;
    if (action === 'add') counterNumber += 1;
    if (action === 'remove' && counterNumber > 0) counterNumber -= 0;
    //product always exists
    let product = products.find((item) => item.id === idProduct);
    //product index in count collection
    counter.map((item, index) => {
      // console.log(item[index]);
      // console.log(product);
      if(item[index] === product) indexCounter = index;
    });
    console.log(indexCounter);
    //add value
    setCounter([...counter, [product, counterNumber]]);
    console.log(counter);
    // if(index !== false) counterNumber = counter[index];
    // console.log(counter);



    //verifica se o objeto encontra-se na coleção de contagem: -1 é igual a false
    // console.log(index);
    // if(index !== -1){
    //   index = counter[index];
    //   counter.map(() => {
    //     return counter[index]= [product ,counterNumber];
    //   })
    // }else setCounter([...counter, [product, counterNumber]]);
    // console.log(counter);
  };

  return (
    <>
      <Header text='PEDIDOS' />
      <Container>
        <Form class='form-orders'>
          <Input
            label='table-label'
            class='orders-input table-input'
            name='table'
            value={null}
            text='MESA'
            type='text'
            placeholder='Digite o número da mesa'
            onChange={null}
          />
          <Input
            label='orders-label'
            class='orders-input'
            name='client'
            value={null}
            text='NOME DO CLIENTE'
            type='text'
            placeholder='Digite o nome do cliente'
            onChange={null}
          />
          <Text class='text-menu text-orders'>CARDÁPIO</Text>
          <Grid class='option-container'>
            <Button type='button' class='option-button' onClick={() => showProducts('breakfast')}>
              CAFÉ DA MANHÃ
            </Button>
            <Button type='button' class='option-button' onClick={() => showHamburguer()}>
              HAMBÚRGUERES
            </Button>
            <Button type='button' class='option-button' onClick={() => showProducts('side')}>
              PORÇÕES
            </Button>
            <Button type='button' class='option-button' onClick={() => showProducts('drinks')}>
              BEBIDAS
            </Button>
          </Grid>
          {subMenu && (
            <Grid class='sub-option-container'>
              <Button type='button' class='sub-option-button' onClick={() => showHamburguer('carne')}>
                CARNE
              </Button>
              <Button type='button' class='sub-option-button' onClick={() => showHamburguer('frango')}>
                FRANGO
              </Button>
              <Button type='button' class='sub-option-button' onClick={() => showHamburguer('vegetariano')}>
                VEGETARIANO
              </Button>
            </Grid>
          )}
          <Grid class='menu-section'>
            {refleshMenu &&
              products.map((item) => {
                return (
                  <FoodCard
                    text={item.name}
                    flavor={item.flavor}
                    counter='0'
                    price={item.price}
                    complement={item.complement}
                    removeCounter={() => productCounter(item.id, 'remove')}
                    addCounter={() => productCounter(item.id, 'add')}
                  />
                );
              })}
          </Grid>
          <Input
            label='payment-label'
            class='payment-input'
            name='payment'
            value={null}
            text='TOTAL'
            type='number'
            placeholder='0,00'
            onChange={null}
            disabled
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
