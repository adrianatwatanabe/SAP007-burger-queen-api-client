import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/PrivateComponent/admin';
import Cook from './components/PrivateComponent/cook';
import Waiter from './components/PrivateComponent/waiter';
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
        <Route exact path='/' end element={<Login />}/>
        <Route path="/*" element={<Admin />}>
          <Route exact path='menu' element={<Management />} />
          <Route exact path='register' element={<Register />} />
          <Route exact path='employee' element={<UsersList />} />
        </Route>
        <Route path="/*" element={<Cook />}>
          <Route exact path='orders-progress' element={<OrdersProgress />} />
        </Route>
        <Route path="/*" element={<Waiter />}>
          <Route exact path='orders' element={<Orders />} />
          <Route exact path='delivery' element={<OrdersDelivered />} />
          <Route exact path='finish' element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
