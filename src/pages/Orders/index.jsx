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
  const [toggleMenu, setToggleMenu] = React.useState('');
  const [toggleSubMenu, setToggleSubMenu] = React.useState('');
  const [sortProducts, setSortProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [chosenMenu, setChosenMenu] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const [form, setForm] = React.useState({
    table: '',
    client: '',
    products: [],
    counter: {},
  });

  React.useEffect(() => {
    getProducts();
    async function getProducts() {
      const azProducts = await getAllProducts();
      return setSortProducts(azProducts);
    }
  }, []);

  const showProducts = (option) => {
    setToggleSubMenu('');
    setToggleMenu(option);
    setSubMenu(false);
    setProducts(sortProducts.filter((item) => item.sub_type === option));
    setShowMenu(true);
  };

  const showBurgerMenu = (option) => {
    setToggleMenu('hamburger');
    setToggleSubMenu(option);
    setSubMenu(true);
    setProducts(sortProducts.filter((item) => item.flavor === option));
    setShowMenu(true);
  };

  const inputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const counterInputValue = (item, counter) => {
    products.forEach((product) => {
      if (product.id === item.id) {
        setTotalPrice(totalPrice - (item.price * item.counter));
        item.counter = counter;
        item.subtotal = item.price * item.counter;
        setTotalPrice(totalPrice + (item.price * item.counter));
        noRepeatItems(item);
      }
    });
  }

  const addItems = (item) => {
    products.forEach((product) => {
      if (product.id === item.id) {
        item.counter = item.counter >= 0 ? Number(item.counter) + 1 : (item.counter = 0);
        item.subtotal = item.counter > 0 ? item.price * item.counter : item.price;
        noRepeatItems(item);
        setTotalPrice(totalPrice + item.price);
      }
    });
  };

  const removeItems = (item) => {
    products.forEach((product) => {
      if (product.id === item.id) {
        item.counter = item.counter > 0 ? item.counter - 1 : (item.counter = 0);
        item.subtotal = item.counter > 0 ? item.price * item.counter : item.price;
        noRepeatItems(item);
        setTotalPrice((totalPrice > 0) ? totalPrice - item.price : totalPrice);
      }
    });
  }

  const deleteOrder = (item) => {
    products.forEach((product) => {
      if (product.id === item.id) {
        item.counter = 0;
        noRepeatItems(item);
        setTotalPrice((totalPrice > 0) ? totalPrice - item.subtotal : totalPrice);
      }
    });
  }

  const noRepeatItems = (item) => {
    const indexOrder = chosenMenu.findIndex((product) => product.id === item.id);
    if (chosenMenu.length === 0)
      setChosenMenu(item);
    if (indexOrder === -1)
      setChosenMenu([...chosenMenu, item]);
    else {
      setChosenMenu(chosenMenu.splice(indexOrder, 1));
      setChosenMenu([...chosenMenu, item]);
    }
  }

  const changeOrder = (item, counter) => {
    if (item.counter < Number(counter)) addItems(item);
    if (item.counter > Number(counter)) removeItems(item);
  }

  const sendOrders = (e) => {
    e.preventDefault();
    const orderData = {
      client: form.client,
      table: form.table,
      products:
        chosenMenu.map((item) => {
          const infosProduct = {
            id: item.id,
            name: item.name,
            price: item.price,
            flavor: item.flavor,
            complement: item.complement,
            qtd: item.counter,
          };
          return infosProduct
        }),
    };
    console.log(orderData);
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
            <Button
              type='button'
              customClass={`${toggleMenu === 'breakfast' ? 'activeMenu' : 'optionButton'}`}
              onClick={() => showProducts('breakfast')}>
              CAFÉ DA MANHÃ
            </Button>
            <Button
              type='button'
              customClass={`${toggleMenu === 'hamburger' ? 'activeMenu' : 'optionButton'}`}
              onClick={() => showBurgerMenu('hamburger')}>
              HAMBÚRGUERES
            </Button>
            <Button
              type='button'
              customClass={`${toggleMenu === 'side' ? 'activeMenu' : 'optionButton'}`}
              onClick={() => showProducts('side')}>
              PORÇÕES
            </Button>
            <Button
              type='button'
              customClass={`${toggleMenu === 'drinks' ? 'activeMenu' : 'optionButton'}`}
              onClick={() => showProducts('drinks')}>
              BEBIDAS
            </Button>
          </Grid>
          {subMenu && (
            <Grid customClass='subOptionContainer'>
              <Button
                type='button'
                customClass={`${(toggleSubMenu === 'carne') ? 'activeSubMenu' : 'subOptionButton'}`}
                onClick={() => showBurgerMenu('carne')}>
                CARNE
              </Button>
              <Button
                type='button'
                customClass={`${(toggleSubMenu === 'frango') ? 'activeSubMenu' : 'subOptionButton'}`}
                onClick={() => showBurgerMenu('frango')}>
                FRANGO
              </Button>
              <Button
                type='button'
                customClass={`${(toggleSubMenu === 'vegetariano') ? 'activeSubMenu' : 'subOptionButton'}`}
                onClick={() => showBurgerMenu('vegetariano')}>
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
                    price={item.subtotal}
                    counter={item.counter}
                    onChangeCounter={(e) => counterInputValue(item, e.target.value)}
                    addCounter={() => addItems(item)}
                    removeCounter={() => item.counter === 0 ? null : removeItems(item)}
                  />
                );
              })}
          </List>
          <Text customClass='textOrders'>TOTAL</Text>
          <Grid customClass='listOrders'>
            <Text customClass='orderTableTitle'>PRODUTO</Text>
            <Grid customClass='orderTableInfo'>
              <Text customClass='orderTableTitle'>QUANT.</Text>
              <Text customClass='orderTableTitle'>P. U.</Text>
              <Text customClass='orderTableTitle'>P. T.</Text>
              <Text customClass='orderTableTitle'>EXCLUIR</Text>
            </Grid>
          </Grid>
          <List customClass='orderList'>
            {chosenMenu.sort((a, b) => a.name.localeCompare(b.name)) &&
              chosenMenu.map((item) => {
                return (item.counter > 0 &&
                  <OrderTable
                    key={item.id}
                    flavor={item.flavor}
                    name={item.name}
                    complement={item.complement}
                    counter={item.counter}
                    price={item.price}
                    subTotal={item.subtotal}
                    changeCounter={(e) => changeOrder(item, e.target.value)}
                    deleteProduct={() => deleteOrder(item)}
                  />);
              })}
          </List>
          <Text customClass='payment'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</Text>
          <Grid customClass='registerButton'>
            <Button type='button' customClass='cancellButton' onClick={null}>
              CANCELAR
            </Button>
            <Button type='submit' customClass='confirmButton' onClick={sendOrders}>
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
