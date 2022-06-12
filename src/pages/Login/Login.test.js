import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from '.';
import * as storage from '../../services/storage';

let email = '';
let password = '';

const API = jest.mock('../../services/user', () => ({
  ...jest.requireActual('../../services/user'),
  userLogin: jest.fn()
    .mockImplementation(email, password)
    .mockResolvedValue('')
}));

describe('Login and UseForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Deverá logar usuário corretamente, validanto todos os testes', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    email = 'tiemi@gmail.com';
    password = '123456';

    /* Event change on input */
    const getEmail = screen.getByPlaceholderText('Digite o seu email');
    const getPassword = screen.getByPlaceholderText('Digite a sua senha');
    user.type(getEmail, email);
    user.type(getPassword, password);

    /* Saving value */
    getEmail.value = email;
    getPassword.value = password;

    /* Event click on ENTER button*/
    const login = screen.getByRole('login');
    user.click(login);
    storage.setUserData('Tiemi', password, 'admin');
    expect(API.userLogin).toHaveBeenCalled();
    expect(API.userLogin).toHaveBeenCalledTimes(1);
    storage.deleteUserData();
  });
});
