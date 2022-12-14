import React from "react";
import * as productosServer from "./productosServer";
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const TypesItems=({ Tipos, listTipos })=>{
    const history = useHistory();
    const handleDelete = async (tipoId)=>{
        await productosServer.deleteType(tipoId);
        listTipos();
    };
    //console.log(Tipos);
    return(
        <div className="row">            
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{Tipos.name}</td>
                    <td>
                    <button onClick={()=>Tipos.id_tipo && handleDelete(Tipos.id_tipo)} className = "btn btn-danger m-4">Delete</button>
                    <button onClick={()=>history.push(`/updateTipo/${Tipos.id_tipo}`)} className = "btn btn-sm btn-info my-4">Editar</button>
                    <button className = "btn btn-sm btn-info m-4"><a href = "/TipoForms">Guardar</a></button>
                    </td>                    
                    </tr>
                </tbody>
            </Table>   
        </div>
    )
};

export default TypesItems;