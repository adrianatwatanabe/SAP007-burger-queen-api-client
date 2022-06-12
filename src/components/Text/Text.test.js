import { render, screen } from '@testing-library/react';
import Text from '../Text';

describe('Text component', () => {
  it('Deve renderizar um texto de uma linha', () => {
    render(<Text>Texto curto</Text>);
    const element = screen.getByText('Texto curto');
    expect(element).toBeInTheDocument();
  });
  it('Deve renderizar um texto de um mais de um parágrafo', () => {
    render(
    <>
      <Text>Texto curto</Text>
      <Text>Texto texto texto texto <br/> texto comprido.</Text>
    </>
    );
    const element = screen.getByText('Texto curto');
    expect(element).toBeInTheDocument();
  });
});