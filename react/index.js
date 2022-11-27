import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import NavBar from './components/Navbar/NavBar';
import ListaTipos from './components/productos/ListaTipos';
import listaProductos from './components/productos/listaProductos';
import TipoForms from './components/Forms/TipoForms';
import ProductoForms from './components/Forms/ProductoForms';
import Presentacion from './components/listProductos/Presentacion';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <div className="container my-4">
      <Switch>
        <Route exact path='/' component = {Presentacion} />
        <Route path='/TipoForms' component = {TipoForms} />
        <Route path='/ListaTipos' component = {ListaTipos} />
        <Route path='/updateTipo/:id_tipo' component = {TipoForms} />
        <Route path='/listaProductos' component = {listaProductos} />
        <Route path='/ProductoForms' component = {ProductoForms} />
        <Route path='/updateProducto/:id' component = {ProductoForms} />
      </Switch>    
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
