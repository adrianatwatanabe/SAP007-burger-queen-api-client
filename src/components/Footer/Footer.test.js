import React from 'react';
import { MemoryRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import * as storage from '../../services/storage';
import Footer from '.';
import Cook from '../PrivateComponent/cook';
import Login from '../../pages/Login';
import OrdersProgress from '../../pages/OrdersProgress';

describe('Footer component', () => {
  it('Deve renderizar o Footer do role cook', () => {
    /* Local Storage */
    storage.setUserData('Name', '123456', 'cook');
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    /* checking alt text */
    const elementOne = screen.getByAltText('Sair da conta BURGER Queen');
    expect(elementOne).toBeInTheDocument();
    /* changing URL */
    storage.deleteUserData();
  });

  it('Deve renderizar o Footer do role admin', () => {
    /* Local Storage */
    storage.setUserData('Name', '123456', 'admin');
    /* URL */
    const history = createMemoryHistory({ initialEntries: ['/register'] });
    expect(history.location.pathname).toBe('/register');
    /* Footer */
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    /* checking alt text */
    const elementOne = screen.getByAltText('Sair da conta BURGER Queen');
    expect(elementOne).toBeInTheDocument();
    const elementTwo = screen.getByAltText('Voltar para o Menu');
    expect(elementTwo).toBeInTheDocument();
    /* changing URL */
    storage.deleteUserData();
  });

  it('Deve renderizar o Footer do role waiter', () => {
    /* Local Storage */
    storage.setUserData('Name', '123456', 'waiter');
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    /* checking alt text */
    const elementOne = screen.getByAltText('Sair da conta BURGER Queen');
    expect(elementOne).toBeInTheDocument();
    const elementTwo = screen.getByAltText('Ir para a seção de Pedidos Entregues');
    expect(elementTwo).toBeInTheDocument();
    const elementThree = screen.getByAltText('Ir para a seção de Finalizar Pedidos');
    expect(elementThree).toBeInTheDocument();
    const elementFour = screen.getByAltText('Ir para a seção de Pedidos');
    expect(elementFour).toBeInTheDocument();
    /* changing URL */
    storage.deleteUserData();
  });

  it('Ao clicar no botão de sair, a URL deve ir para a página de Login', () => {
    /* Local Storage */
    storage.setUserData('Name', '123456', 'cook');

    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' end element={<Login />} />
          <Route path='/*' element={<Cook />}>
            <Route path='orders-progress' element={<OrdersProgress />} />
          </Route>
        </Routes>
      </BrowserRouter>
    ); 

    const history = createMemoryHistory({ initialEntries: ['/orders-progress'] });
    expect(history.location.pathname).toBe('/orders-progress');
    screen.findByTitle('Sair da conta BURGER Queen')
      .then(() => user.click(this));
    expect(createMemoryHistory().location.pathname).toBe('/');
  });
});
