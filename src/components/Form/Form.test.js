import { render, screen } from '@testing-library/react';
import Form from '.';
import Input from '../Input';
import Button from '../Button';

describe('Container component', () => {
  it('Deve renderizar o formulário com outros componentes internos', () => {
    render(
    <Form>
      <Input placeholder="Digite aqui" />
      <Button><p>ENTRAR</p></Button>;
    </Form>);
    const inputTest = screen.getByPlaceholderText('Digite aqui');
    expect(inputTest).toBeInTheDocument();
  });
});