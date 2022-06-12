import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/PrivateComponent/admin';
import Cook from './components/PrivateComponent/cook';
import Waiter from './components/PrivateComponent/waiter';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Register from './pages/Register';
import UsersList from './pages/UsersList';
import OrdersProgress from './pages/OrdersProgress';
import Orders from './pages/Orders';
import OrdersDelivered from './pages/OrdersDelivered';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' end element={<Login />} />
        <Route path='/*' element={<Admin />}>
          <Route path='menu' element={<Menu />} />
          <Route path='register' element={<Register />} />
          <Route path='employee' element={<UsersList />} />
        </Route>
        <Route path='/*' element={<Cook />}>
          <Route path='orders-progress' element={<OrdersProgress />} />
        </Route>
        <Route path='/*' element={<Waiter />}>
          <Route path='orders' element={<Orders />} />
          <Route path='delivery' element={<OrdersDelivered />} />
          <Route path='finish' element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
