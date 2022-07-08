import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Grid from '../../components/Grid';
import List from '../../components/List';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FoodCard from '../../components/FoodCard';
import { getAllProducts } from '../../services/products';

const Orders = () => {
  const [subMenu, setSubMenu] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const [sortProducts, setSortProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [chosenMenu, setChosenMenu] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const [form, setForm] = React.useState({
    table: '',
    client: '',
  });

  const showProducts = (option) => {
    setSubMenu(false);
    setProducts(sortProducts.filter((item) => item.sub_type === option));
    setShowMenu(true);
  };

  const showBurgerMenu = (option) => {
    setSubMenu(true);
    setProducts(sortProducts.filter((item) => item.flavor === option));
    setShowMenu(true);
  };

  React.useEffect(() => {
    getProducts();
    async function getProducts() {
      const azProducts = await getAllProducts();
      return setSortProducts(azProducts);
    }
  }, []);

  const inputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const addItems = (item) => {
    products.forEach((product) => {
      if (product.id === item.id) {
        item.counter = item.counter >= 0 ? item.counter + 1 : (item.counter = 0);
        item.subTotal = item.counter > 0 ? item.price * item.counter : item.price;
        setChosenMenu([...chosenMenu, item]);
      }
    });
    setTotalPrice(totalPrice + item.price);
  };

  const removeItems = (item) => {
    products.forEach((product) => {
      if (product.id === item.id) {
        item.counter = item.counter > 0 ? item.counter - 1 : (item.counter = 0);
        item.subTotal = item.counter > 0 ? item.price * item.counter : item.price;
        setChosenMenu([...chosenMenu, item]);
        if (item.counter > 0)
          setTotalPrice((totalPrice > 0) ? totalPrice - item.price : totalPrice);
        else
          setTotalPrice((totalPrice > 0) ? totalPrice - item.price : 0);
      }
    });
  }

  return (
    <>
      <Header text='PEDIDOS' />
      <Container containerGeneral='containerGeneral' container='container'>
        <Form customClass='formOrders'>
          <Input
            classLabel='tableLabel'
            classInput='tableInput'
            type='number'
            name='table'
            value={form.table}
            text='MESA'
            placeholder='Digite o número da mesa'
            onChange={inputValue}
          />
          <Input
            classLabel='clientLabel'
            classInput='clientInput'
            type='text'
            name='client'
            value={form.client}
            text='NOME DO CLIENTE'
            placeholder='Digite o nome do cliente'
            onChange={inputValue}
          />
          <Text customClass='textOrders'>CARDÁPIO</Text>
          <Grid customClass='optionContainer'>
            <Button type='button' customClass='optionButton' onClick={() => showProducts('breakfast')}>
              CAFÉ DA MANHÃ
            </Button>
            <Button type='button' customClass='optionButton' onClick={() => showBurgerMenu('')}>
              HAMBÚRGUERES
            </Button>
            <Button type='button' customClass='optionButton' onClick={() => showProducts('side')}>
              PORÇÕES
            </Button>
            <Button type='button' customClass='optionButton' onClick={() => showProducts('drinks')}>
              BEBIDAS
            </Button>
          </Grid>
          {subMenu && (
            <Grid customClass='subOptionContainer'>
              <Button type='button' customClass='subOptionButton' onClick={() => showBurgerMenu('carne')}>
                CARNE
              </Button>
              <Button type='button' customClass='subOptionButton' onClick={() => showBurgerMenu('frango')}>
                FRANGO
              </Button>
              <Button type='button' customClass='subOptionButton' onClick={() => showBurgerMenu('vegetariano')}>
                VEGETARIANO
              </Button>
            </Grid>
          )}
          <List customClass='menuSection'>
            {showMenu &&
              products.map((item) => {
                return (
                  <FoodCard
                    key={item.id}
                    text={item.name}
                    flavor={item.flavor}
                    price={item.subTotal}
                    complement={item.complement}
                    counter={item.counter}
                    addCounter={() => addItems(item)}
                    removeCounter={() => removeItems(item)}
                  />
                );
              })}
          </List>
          <Text customClass='paymentLabel'>
            TOTAL
          </Text>
          <Text customClass='paymentInput'>
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}
          </Text>
          <Grid customClass='registerButton'>
            <Button type='button' customClass='cancellButton' onClick={null}>
              CANCELAR
            </Button>
            <Button type='submit' customClass='confirmButton' onClick={null}>
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
