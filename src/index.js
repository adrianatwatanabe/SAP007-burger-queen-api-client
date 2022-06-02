import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Management from './pages/admin/Management';
import Register from './pages/admin/Register';
import UsersList from './pages/admin/UsersList';
import OrdersProgress from './pages/kitchen/OrdersProgress';
import Orders from './pages/attendance/Orders';
import OrdersDelivered from './pages/attendance/OrdersDelivered';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="administracao" element={<Management />} />
        <Route path="cadastro-funcionarios" element={<Register />} />
        <Route path="lista-funcionarios" element={<UsersList />} />
        <Route path="pedidos-andamento" element={<OrdersProgress />} />
        <Route path="pedidos" element={<Orders />} />
        <Route path="pedidos-entregues" element={<OrdersDelivered />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
