import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import NavBar from './components/Navbar/NavBar';
import ListaTipos from './components/productos/ListaTipos';
import TipoForms from './components/Forms/TipoForms';
import Presentacion from './components/listProductos/Presentacion';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <div className="container my-4">
      <Switch>
        <Route exact path='/' component = {ListaTipos} />
        <Route path='/TipoForms' component = {TipoForms} />
        <Route path='/Presentacion' component = {Presentacion} />
        <Route path='/updateTipo/:id_tipo' component = {TipoForms} />
      </Switch>    
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
