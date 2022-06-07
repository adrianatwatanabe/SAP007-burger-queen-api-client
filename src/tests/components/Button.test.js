/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import ButtonLink from '../../components/ButtonLink';
import { NavLink } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  NavLink: (children) => {
    return <a>{children}</a>;
  },
}));

describe('Button component', () => {
  //NavLink.mockImplementation(() => (children) => children);
  it('Deve renderizar um botão com o texto fornecido', () => {
    render(<ButtonLink>ENTRAR</ButtonLink>);
    const buttonTest = screen.getByText('ENTRAR');
    expect(buttonTest).toBeInTheDocument();
  });
});

