import { render, screen } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
  it('Deve renderizar um botão com o texto fornecido', () => {
    render(<Button text='ENTRAR'/>);
    const buttonTest = screen.getByText('Entrar')
    expect(buttonTest).toBeInTheDocument();
  })
});

