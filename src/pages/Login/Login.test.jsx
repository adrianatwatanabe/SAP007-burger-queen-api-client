import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { userLogin } from '../../services/user';
import Login from '.';
import * as storage from '../../services/storage';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
  };
});
jest.mock("../../services/user")

describe('Login', () => {
  beforeEach(() => {
    userLogin.mockClear();
  });
  it('Deverá logar usuário corretamente', async () => {
    userLogin.mockResolvedValueOnce({});
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const email = 'exemplo@exemplo.com';
    const password = '123456';

    /* Event change on input */
    const getEmail = screen.getByPlaceholderText('Digite o seu email');
    const getPassword = screen.getByPlaceholderText('Digite a sua senha');
    user.type(getEmail, email);
    user.type(getPassword, password);

    /* Event click on ENTER button*/
    const btnLogin = screen.getByRole('login');
    user.click(btnLogin);

    storage.setUserData('Nome', password, 'admin');
    await waitFor(() => {
      expect(userLogin).toHaveBeenCalledWith(email, password);
    });
    expect(userLogin).toHaveBeenCalledTimes(1);
    storage.deleteUserData();
  });
});
