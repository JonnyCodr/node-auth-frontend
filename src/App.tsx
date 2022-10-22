import React from 'react';
import './App.css';
import Users from "./pages/users/Users";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import Roles from "./pages/roles/Roles";
import RoleCreate from "./pages/roles/RoleCreate";
import RoleEdit from "./pages/roles/RoleEdit";
import Products from "./pages/products/products";
import ProductsCreate from "./pages/products/ProductsCreate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/login'} element={<Login />} />

          <Route path={'/users'} element={<Users />} />
          <Route path={'/users/create'} element={<UserCreate />} />
          <Route path={'/users/edit/:userId'} element={<UserEdit />} />

          <Route path={'/roles'} element={<Roles />} />
          <Route path={'/roles/create'} element={<RoleCreate />} />
          <Route path={'/roles/edit/:id'} element={<RoleEdit />} />

          <Route path={'/products'} element={<Products />} />
          <Route path={'/products/create'} element={<ProductsCreate />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
