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
import OrderTable from '../../components/OrderTable';

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
    setShowMenu(true);
  };

  const showBurgerMenu = (option) => {
    setSubMenu(true);
    setProducts(sortProducts.filter((item) => item.flavor === option));
    setShowMenu(true);
  };

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
        noRepeatItems(item);
        setTotalPrice(totalPrice + item.price);
      }
    });
  };

  const removeItems = (item) => {
    products.forEach((product) => {
      if (product.id === item.id) {
        item.counter = item.counter > 0 ? item.counter - 1 : (item.counter = 0);
        item.subTotal = item.counter > 0 ? item.price * item.counter : item.price;
        noRepeatItems(item);
        setTotalPrice((totalPrice > 0) ? totalPrice - item.price : totalPrice);
      }
    });
  }

  const noRepeatItems = (item) => {
    const indexProduct = chosenMenu.findIndex((product) => product.id === item.id);
    if (chosenMenu.length === 0)
      setChosenMenu(item);
    if (indexProduct === -1) {
      setChosenMenu([...chosenMenu, item]);
      chosenMenu.sort((a, b) => a.name.localeCompare(b.name))
    }
    else {
      setChosenMenu(chosenMenu.splice(indexProduct, 1));
      setChosenMenu([...chosenMenu, item]);
      chosenMenu.sort((a, b) => a.name.localeCompare(b.name))
    }
  }

  const changeOrder = (item, counter) => {
    if (item.counter < Number(counter)) addItems(item);
    if (item.counter > Number(counter)) removeItems(item);
  }

  const deleteOrder = (item) => {
    item.counter = 0;
    removeItems(item);
    chosenMenu.sort((a, b) => a.name.localeCompare(b.name))
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
                    complement={item.complement}
                    counter={item.counter}
                    price={item.subTotal}
                    addCounter={() => addItems(item)}
                    removeCounter={() => item.counter === 0 ? null : removeItems(item)}
                  />
                );
              })}
          </List>
          <Text customClass='textOrders'>TOTAL</Text>
          <List customClass='menuSection'>

            {chosenMenu.map((item) => {
              return (item.counter > 0 &&
                <OrderTable
                  key={item.id}
                  flavor={item.flavor}
                  name={item.name}
                  complement={item.complement}
                  counter={item.counter}
                  price={item.price}
                  subTotal={item.subTotal}
                  changeCounter={(e) => changeOrder(item, e.target.value)}
                  deleteProduct={() => deleteOrder(item)}
                />);
            })}

            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}
          </List>
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
