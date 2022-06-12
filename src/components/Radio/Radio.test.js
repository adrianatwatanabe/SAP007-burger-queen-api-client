/*
import { render, screen } from '@testing-library/react';
import Radio from '.';

describe('Radio component', () => {
  it('Deve renderizar o texto da descrição do campo', () => {
    render(<Radio text='Cozinha'/>);
    const radioTest = screen.getByText('Cozinha');
    expect(radioTest).toBeInTheDocument();
  });
  it('Deve chamar uma função sempre que o seu valor é alterado', () => {
    const addInputValue = jest.fn();
    render( <Radio
      name={'role'}
      options={['admin', 'waiter', 'cook']}
      value={role}
      setValue={setRole}
      onChange={addInputValue}
    />);
  });
})
*/