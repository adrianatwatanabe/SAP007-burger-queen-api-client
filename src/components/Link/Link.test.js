import { render, screen } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
import Link from '.';
import OrdersList from '../../img/icons/orders-list.png';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('Link component', () => {
  //NavLink.mockImplementation((props) => <a href='/orders-progress'>{props.children}</a>);
  it('Deve renderizar um botão de link com o texto fornecido', () => {
    //console.log(<NavLink>oi</NavLink>);
    //render(<Link href='/orders-progress'><p>PEDIDOS EM ANDAMENTO</p></Link>);
    render(<NavLink>PEDIDOS EM ANDAMENTO</NavLink>);
    const buttonTest = screen.getByText('PEDIDOS EM ANDAMENTO');
    expect(buttonTest).toBeInTheDocument();
  });
  
  it('Deve renderizar um botão de link com a imagem fornecida', () => {
    render(<Link href='/orders'><img src={OrdersList} alt='Ir para a seção de Pedidos'/></Link>);
    
  })
});