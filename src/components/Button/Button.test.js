import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Button from '.';

describe('Button component', () => {
  it('Deve renderizar um texto dentro do botão', () => {
    render(<Button><p>ENTRAR</p></Button>);
    const buttonTest = screen.getByText('ENTRAR');
    expect(buttonTest).toBeInTheDocument();
  });
  it('O botão deve chamar a função senForm()', () => {
    const sendForm = jest.fn();
    render(<Button onClick={sendForm}><p>ENTRAR</p></Button>);
    const buttonTest = screen.getByText('ENTRAR');
    user.click(buttonTest);
    expect(sendForm).toHaveBeenCalledTimes(1);
  });
});
