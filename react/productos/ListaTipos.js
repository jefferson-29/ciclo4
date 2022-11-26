import React, { useEffect, useState } from "react";
import * as productosServer from "./productosServer";
import TypesItems from "./TypesItems";

const ListaTipos=()=>{
    const [tipos, setTipos] = useState([]);

    const listTipos= async ()=>{
        try{
            const res = await productosServer.listTipos();
            const data = await res.json();
            setTipos(data.Tipos);
            //console.log(data);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        listTipos();
    }, []);

    return (
        <div className="row">
            {tipos.map((Tipos)=>(
                <TypesItems key = {Tipos.id_tipo} Tipos = {Tipos} listTipos = {listTipos} />
            ))}
        </div>
    );
};

export default ListaTipos;