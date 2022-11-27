import React from "react";
import * as productosServer from "./productosServer";
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const TypesItems=({ Productos, listProductos })=>{
    const history = useHistory();
    const handleDelete = async (tipoId)=>{
        await productosServer.deleteType(tipoId);
        listProductos();
    };
    //console.log(Tipos);
    return(
        <div className="row">            
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Pagado</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{Productos.nombre}</td>
                    <td>{Productos.precio}</td>
                    <td>{Productos.cantidad}</td>
                    <td>{Productos.pagado}</td>
                    <td>{Productos.id_ciudad}</td>
                    <td>{Productos.id_tipo}</td>
                    <td>
                    <button onClick = {()=>Tipos.id_tipo && handleDelete(Productos.id_producto)} className = "btn btn-danger m-4">Delete</button>
                    <button onClick = {()=>history.push(`/updateTipo/${Productos.id_producto}`)} className = "btn btn-sm btn-info my-4">Editar</button>
                    <button className = "btn btn-sm btn-info m-4"><a href = "/TipoForms">Guardar</a></button>
                    </td>                    
                    </tr>
                </tbody>
            </Table>   
        </div>
    )
};

export default TypesItems;