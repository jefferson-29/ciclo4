import React, { useEffect, useState } from "react";
import * as productosServer from "./productosServer";
import productosItems from "./productosItems";

const ListaProductos=()=>{
    const [productos, setProductos] = useState([]);

    const listProductos= async ()=>{
        try{
            const res = await productosServer.listProductos();
            const data = await res.json();
            setProductos(data.Productos);
            //console.log(data);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        listProductos();
    }, []);

    return (
        <div className="row">
            {productos.map((Productos)=>(
                <productosItems key = {Productos.id_producto} Productos = {Productos} listProductos = {listProductos} />
            ))}
        </div>
    );
};

export default ListaProductos;