import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Management from './pages/Management';
import Register from './pages/Register';
import UsersList from './pages/UsersList';
import OrdersProgress from './pages/OrdersProgress';
import Orders from './pages/Orders';
import OrdersDelivered from './pages/OrdersDelivered';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='menu' element={<Management />} />
        <Route exact path='register' element={<Register />} />
        <Route exact path='employee' element={<UsersList />} />
        <Route exact path='orders-progress' element={<OrdersProgress />} />
        <Route exact path='orders' element={<Orders />} />
        <Route exact path='delivery' element={<OrdersDelivered />} />
        <Route exact path='finish' element={<Orders />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
