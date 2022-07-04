import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Link from '.';
import FinalizeOrders from '../../img/icons/finalize-orders.png';
import OrdersDelivered from '../../img/icons/orders-delivered.png';

describe('Link component', () => {
  it('Deve renderizar um botão de link com o texto fornecido', () => {
    render(
      <MemoryRouter>
        <Link href='/register'>CADASTRAR FUNCIONÁRIOS (AS)</Link>
        <Link href='/orders'>PEDIDOS</Link>
        <Link href='/orders-progress'>PEDIDOS EM ANDAMENTO</Link>
        <Link href='/delivery'>PEDIDOS ENTREGUES</Link>
      </MemoryRouter>
    );
    const elements = screen.getAllByRole('link');
    elements.forEach(() => {
      const element = screen.getByText('CADASTRAR FUNCIONÁRIOS (AS)');
      return expect(element).toBeInTheDocument();
    });
  });

  it('Deve renderizar um botão de link com imagem', () => {
    render(
      <MemoryRouter>
        <Link href='/delivery'>
          <img src={OrdersDelivered} alt='Ir para a seção de Pedidos Entregues' />
        </Link>
        <Link href='/finish'>
          <img src={FinalizeOrders} alt='Ir para a seção de Finalizar Pedidos' />
        </Link>
      </MemoryRouter>
    );
    const elements = screen.getByAltText('Ir para a seção de Pedidos Entregues');
    expect(elements).toBeInTheDocument();
  });

  it('Deve mudar de URL ao clicar no botão', () => {
    render(
      <MemoryRouter>
        <Link href='register'>CADASTRAR FUNCIONÁRIOS (AS)</Link>
        <Link href='orders'>PEDIDOS</Link>
        <Link href='orders-progress'>PEDIDOS EM ANDAMENTO</Link>
        <Link href='delivery'>PEDIDOS ENTREGUES</Link>
      </MemoryRouter>
    );
    const history = createMemoryHistory({ initialEntries: ['/menu'] });
    expect(history.location.pathname).toBe('/menu');

    /* checking link with text */
    const elements = screen.getAllByText('CADASTRAR FUNCIONÁRIOS (AS)');
    elements.map((element) => expect(element).toBeInTheDocument());
    elements.forEach((element) => user.click(element));
    
    /* changing URL */
    const historyTwo = createMemoryHistory({ initialEntries: ['/register'] });
    expect(historyTwo.location.pathname).toBe('/register');
  });
});
