import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { createUser } from '../../services/user';
import Register from '.';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
  };
});
jest.mock("../../services/user")

describe('Register', () => {
  beforeEach(() => {
    createUser.mockClear();
  });
  it('Deverá cadastrar usuário corretamente', async () => {
    createUser.mockResolvedValueOnce({});
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const role = 'admin';
    const name = 'Usuário';
    const email = 'exemplo@exemplo.com';
    const password = '123456';
    const passwordRepeat = '123456';

    /* Event change on input */
    const getRole = screen.getByText('ADMINISTRADOR');
    const getName = screen.getByPlaceholderText('Digite o nome do(a) funcionário(a)');
    const getEmail = screen.getByPlaceholderText('Digite o email');
    const getPassword = screen.getByPlaceholderText('Digite a senha');
    const getPasswordRepeat = screen.getByPlaceholderText('Digite a senha novamente');

    user.type(getRole, role);
    user.type(getName, name);
    user.type(getEmail, email);
    user.type(getPassword, password);
    user.type(getPasswordRepeat, passwordRepeat);

    /* Event click on ENTER button*/
    const btnLogin = screen.getByRole('register');
    user.click(btnLogin);

    await waitFor(() => {
      expect(createUser).toHaveBeenCalledWith(name, email, password, role);
    });
    expect(createUser).toHaveBeenCalledTimes(1);
  });
});
