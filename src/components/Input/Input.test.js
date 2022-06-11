import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Input from '.';

describe('Input component', () => {
  it('Deve renderizar o texto da descrição do campo', () => {
    render(<Input text='NOME'/>);
    const inputTest = screen.getByText('NOME');
    expect(inputTest).toBeInTheDocument();
  });
  it('Deve renderizar o texto do placeholder', () => {
    render(<Input placeholder="Digite aqui" />);
    const inputTest = screen.getByPlaceholderText('Digite aqui');
    expect(inputTest).toBeInTheDocument();
  });

  it('Deve chamar uma função sempre que o seu valor é alterado', () => {
    const sendForm = jest.fn();
    render(<Input onChange={sendForm} type="text" placeholder="Digite aqui" />);
    const inputTest = screen.getByPlaceholderText('Digite aqui');
    const text = 'oi';
    user.type(inputTest, text);
    expect(sendForm).toHaveBeenCalledTimes(text.length);
  });
})