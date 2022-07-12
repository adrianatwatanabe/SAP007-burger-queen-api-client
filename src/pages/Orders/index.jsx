import React from 'react';
import { getAllProducts, createOrders } from '../../services/products';
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
import OrderTable from '../../components/OrderTable';
import Modal from '../../components/Modal';
import useOrderForm from '../../customHooks/useOrderForm';
import useOrders from '../../customHooks/useOrders';

export let menuProducts = '';

const Orders = () => {
  const { chosenMenu, setChosenMenu, totalPrice, setTotalPrice, counterInputValue, addItems, removeItems, deleteOrder } = useOrders();
  const { errorMessage, setErrorMessage, modal, setModal, orderList, setOrderList, formOrders, inputValue, validatedForm, cleanForm } = useOrderForm();

  const [subMenu, setSubMenu] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const [toggleMenu, setToggleMenu] = React.useState('');
  const [toggleSubMenu, setToggleSubMenu] = React.useState('');
  const [products, setProducts] = React.useState([]);
  const [sortProducts, setSortProducts] = React.useState([]);
  const [modalOrder, setModalOrder] = React.useState(false);
  const [errorMessageSend, setErrorMessageSend] = React.useState('');

  React.useEffect(() => {
    getProducts();
    async function getProducts() {
      const response = await getAllProducts();
      switch (response.status) {
        case 200:
          const data = await response.json();
          const products = data.map((product) => ({
            ...product,
            counter: 0,
            subtotal: product.price,
          }))
          menuProducts = products.sort((a, b) => a.name.localeCompare(b.name));
          setSortProducts(products);
          break;
        case 401:
          setErrorMessage('Usuário não autenticado!');
          setModal(true);
          break;
        default:
          setErrorMessage('Erro, tente novamente!');
          setModal(true);
      }
    }
    setTimeout(() => setModal(false), 3000);
  }, [setErrorMessage, setModal, setSortProducts]);

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

  const sendOrders = async (e) => {
    e.preventDefault();
    const validation = validatedForm(chosenMenu);
    if (validation !== false) {
      const orderData = {
        client: formOrders.client,
        table: formOrders.table,
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
      const response = await createOrders(orderData);
      switch (response.status) {
        case 200:
          setOrderList([...orderList, orderData]);
          setErrorMessageSend('Pedido finalizado com sucesso!');
          setModalOrder(true);
          cleanOrder();
          break;
        case 400:
          setErrorMessageSend('Dados obrigatórios de pedido faltando!');
          setModalOrder(true);
          break;
        case 401:
          setErrorMessageSend('Usuário não autenticado!');
          setModalOrder(true);
          break;
        default:
          setErrorMessageSend('Erro, tente novamente!');
          setModalOrder(true);
      }
    }
    setTimeout(() => setModalOrder(false), 3000);
  }

  const cleanOrder = () => {
    setProducts([]);
    setChosenMenu([]);
    setTotalPrice(0);
    cleanForm();
  }

  return (
    <>
      <Header text='PEDIDOS' />
      <Container containerGeneral='containerGeneral' container='container'>
        <Form customClass='formOrders'>
          <Input
            classLabel='tableLabel'
            classInput='tableInput'
            type='text'
            name='table'
            value={formOrders.table}
            text='MESA'
            placeholder='Digite o número da mesa'
            onChange={inputValue}
          />
          <Input
            classLabel='clientLabel'
            classInput='clientInput'
            type='text'
            name='client'
            value={formOrders.client}
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
                    counter={item.counter} e
                    onChangeCounter={(e) => counterInputValue(item, e.target)}
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
                    productName={item.name}
                    complement={item.complement}
                    price={item.price}
                    subTotal={item.subtotal}
                    tableCounter={item.counter}
                    onChangeTableCounter={(e) => counterInputValue(item, e.target.value)}
                    deleteProduct={() => deleteOrder(item)}
                  />);
              })}
          </List>
          <Text customClass='payment'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</Text>

          {modal &&
            <Modal classContainer="containerGeneralOrders" classSubContainer="subContainerOrders">
              <Text customClass='textErrors'>{errorMessage}</Text>
            </Modal>
          }

          {modalOrder &&
            <Modal classContainer="containerGeneralOrders" classSubContainer="subContainerOrders">
              <Text customClass='textErrors'>{errorMessageSend}</Text>
            </Modal>
          }

          <Grid customClass='registerButton'>
            <Button type='button' customClass='cancellButton' onClick={cleanOrder}>
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
}

export default Orders;
