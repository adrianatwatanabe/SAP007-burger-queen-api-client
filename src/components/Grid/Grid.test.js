import { render, screen } from '@testing-library/react';
import Grid from '.';
import Button from '../Button';

describe('Grid component', () => {
  it('Deve renderizar uma div com outros componentes internos', () => {
    render(
      <Grid>
        <Button>LIMPAR</Button>
        <Button>CADASTRAR</Button>
      </Grid>
    );
    const elementOne = screen.getByText('LIMPAR');
    const elementTwo = screen.getByText('CADASTRAR');
    expect(elementOne).toBeInTheDocument();
    expect(elementTwo).toBeInTheDocument();
  });
  it('Deve aplicar a classe na tag Grid', () => {
    render(
      <>
        <Grid class='register-button' />
        <Button class='button' />
      </>
    );
    const elements = screen.getAllByRole('grid');
    elements.filter((element) => {
      return expect(element).toHaveClass('register-button');
    });
  });
  it('Deve aplicar o display grid ou flex na tag Grid', () => {
    render(<Grid class='register-button' />);
    const elements = screen.getByRole('grid', { class: /register-button/i });
    expect(elements).toHaveStyle(`display: block;`);
  });
});
