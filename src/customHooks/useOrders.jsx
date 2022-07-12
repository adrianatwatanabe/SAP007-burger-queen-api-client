import React from 'react';
import { menuProducts } from '../pages/Orders';

const useOrders = () => {
  const [chosenMenu, setChosenMenu] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const counterInputValue = (item, e) => {
    menuProducts.forEach((product) => {
      if (product.id === item.id) {
        const previousCounter = item.counter;
        item.counter = e.value;
        item.subtotal = item.price * item.counter;
        if (previousCounter < item.counter) setTotalPrice(totalPrice + ((e.value - previousCounter) * item.price));
        else setTotalPrice(totalPrice - ((previousCounter - e.value) * item.price));
        noRepeatItems(item);
      }
    });
  }

  const addItems = (item) => {
    menuProducts.forEach((product) => {
      if (product.id === item.id) {
        item.counter = item.counter >= 0 ? Number(item.counter) + 1 : (item.counter = 0);
        item.subtotal = item.counter > 0 ? item.price * item.counter : item.price;
        noRepeatItems(item);
        setTotalPrice(totalPrice + item.price);
      }
    });
  };

  const removeItems = (item) => {
    menuProducts.forEach((product) => {
      if (product.id === item.id) {
        item.counter = item.counter > 0 ? item.counter - 1 : (item.counter = 0);
        item.subtotal = item.counter > 0 ? item.price * item.counter : item.price;
        noRepeatItems(item);
        setTotalPrice((totalPrice > 0) ? totalPrice - item.price : totalPrice);
      }
    });
  }

  const deleteOrder = (item) => {
    menuProducts.forEach((product) => {
      if (product.id === item.id) {
        setTotalPrice((totalPrice > 0) ? totalPrice - item.subtotal : 0);
        item.counter = 0;
        item.subtotal = item.price;
        noRepeatItems(item);
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

  return { chosenMenu, setChosenMenu, totalPrice, setTotalPrice, counterInputValue, addItems, removeItems, deleteOrder };
}

export default useOrders;