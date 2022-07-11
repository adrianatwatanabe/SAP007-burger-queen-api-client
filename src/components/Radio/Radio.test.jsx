import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Radio from '.';

describe('Radio component', () => {
  it('Deve renderizar o texto da descrição do campo', () => {
    render(
      <Radio
        name='role'
        text={['ADMINISTRADOR', 'ATENDIMENTO', 'COZINHA']}
        options={['admin', 'waiter', 'cook']}
      />);
    const radioTest = screen.getByText('COZINHA');
    expect(radioTest).toBeInTheDocument();
  });

  it('Deve chamar uma função sempre que o seu valor é alterado', () => {
    const addInputValue = jest.fn();
    render(
      <Radio
        text={['ADMINISTRADOR', 'ATENDIMENTO', 'COZINHA']}
        options={['admin', 'waiter', 'cook']}
        onChange={addInputValue}
      />
    );
    const elements = screen.getAllByRole('admin');
    elements.forEach((element) => user.type(element));
    expect(addInputValue).toHaveBeenCalledTimes(1);
  });
})
