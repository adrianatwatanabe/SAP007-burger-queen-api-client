import { render, screen } from '@testing-library/react';
import Container from '.';
import Text from '../Text';

describe('Container component', () => {
  it('Deve renderizar um container com outros componentes internos', () => {
    render(<Container><Text>ENTRAR</Text></Container>);
    const element = screen.getByText('ENTRAR');
    expect(element).toBeInTheDocument();
  });
});