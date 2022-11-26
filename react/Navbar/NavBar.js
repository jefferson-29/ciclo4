import React from 'react';
import {Link} from 'react-router-dom';
const NavBar =()=>{

    return(
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Presentacion">Productos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-Link active" aria-current="page" to="/Presentacion">Home</Link>
                        <Link className="nav-Link" to="/">Producto</Link>
                        <Link className="nav-Link" to="/">Ciudad</Link>
                        <Link className="nav-Link" to="/TipoForms">Tipo</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;