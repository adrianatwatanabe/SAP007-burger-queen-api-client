import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Admin from './components/PrivateComponent/admin';
import Menu from './pages/Menu';
import Login from './pages/Login';
import * as storage from './services/storage';

describe('App and Privete Component', () => {
  it('Ao clicar no botão de ENTRAR, deve verificar o role e carregar a sua página inicial', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' end element={<Login />} />
          <Route path='/*' element={<Admin />}>
            <Route path='menu' element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
    const history = createMemoryHistory({ initialEntries: ['/'] });
    expect(history.location.pathname).toBe('/');
    user.click(screen.getByText('ENTRAR'));

    /* Local Storage */
    storage.setUserData('Name', '123456', 'admin');
    const loginStatus = storage.getUserData()[2] === 'admin';

    /* Page Menu */
    const menu = loginStatus ? createMemoryHistory({ initialEntries: ['/menu']}) : null;
    expect(menu.location.pathname).toBe('/menu');
  });
});