import React from 'react';
import './App.css';
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/users'} element={<Users />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
