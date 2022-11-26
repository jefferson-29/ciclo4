import React from "react";
import * as productosServer from "./productosServer";
import { useHistory } from "react-router-dom";

const TypesItems=({ Tipos, listTipos })=>{
    const history = useHistory();
    const handleDelete = async (tipoId)=>{
        await productosServer.deleteType(tipoId);
        listTipos();
    };
    //console.log(Tipos);
    return(
        <div className="col-md-4">
            <div className="card card-body">
                <h2 className="card-title">{Tipos.name}</h2>
                <button onClick={()=>Tipos.id_tipo && handleDelete(Tipos.id_tipo)} className = "btn btn-danger my-2">Delete</button>
                <button onClick={()=>history.push(`/updateTipo/${Tipos.id_tipo}`)} className = "btn btn-sm btn-info my-2">Editar</button>
            </div>
        </div>
    )
};

export default TypesItems;