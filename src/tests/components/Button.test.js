import { render, screen } from '@testing-library/react';
import ButtonLink from '../../components/ButtonLink';
//import * as ReactRouterDom from 'react-router-dom';
import { NavLink } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  NavLink: jest.fn(),
}));

describe('Button component', () => {
  NavLink.mockImplementation((children) => <p>{children}</p>);
  it('Deve renderizar um botão com o texto fornecido', () => {
    console.log(NavLink('text'));
    render(<ButtonLink>ENTRAR</ButtonLink>);
    screen.debug();
    const buttonTest = screen.getByText('ENTRAR')
    expect(buttonTest).toBeInTheDocument();
  })
});

