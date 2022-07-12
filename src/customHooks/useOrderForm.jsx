import React from 'react';

const useOrderForm = () => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [modal, setModal] = React.useState(false);
  const [orderList, setOrderList] = React.useState([]);
  const [formOrders, setFormOrders] = React.useState({
    table: '',
    client: '',
    products: [],
    counter: {},
  });

  const inputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormOrders({ ...formOrders, [name]: value });
  };

  const validatedForm = (chosenMenu) => {
    const regex = /[0-9]/gi;
    setTimeout(() => setModal(false), 3000);
    if (formOrders.client === '' || formOrders.table === '') {
      setErrorMessage('Preencha os campos da mesa e nome do cliente!');
      setModal(true);
      return false;
    } else if (formOrders.table < 1 || formOrders.table > 35) {
      setErrorMessage('O número das mesas vão de 1 a 35!');
      setModal(true);
      return false;
    } else if (!regex.test(formOrders.table)) {
      setErrorMessage('Digite somente números de 1 a 35 para o campo da mesa!');
      setModal(true);
      return false;
    } else if (chosenMenu.length === 0) {
      setErrorMessage('Adicione produtos ao pedido!');
      setModal(true);
      return false;
    } else {
      return true;
    }
  }

  const cleanForm = () => {
    setFormOrders({
      table: '',
      client: '',
      products: [],
      counter: {},
    });
    setErrorMessage('');
  }

  return { errorMessage, setErrorMessage, modal, setModal, orderList, setOrderList, formOrders, inputValue, validatedForm, cleanForm };
}

export default useOrderForm;