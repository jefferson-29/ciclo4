import React, { useState } from 'react';
import * as productosServer from '../productos/productosServer';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ProductoForms =()=>{
    const history = useHistory();
    const params = useParams();

    console.log(params);

    const initialState = {id_producto:0, nombre:""};

    const [Producto, setProductos] = useState(initialState);

    const handleInputChange=(e)=>{
    //console.log(e.target.tipo);
    //console.log(e.target.value);
    setTipos({ ...Producto, [e.target.nombre]: e.target.value });
};

const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        let res;
        if(!params.id_producto){
            res = await productosServer.registerProductos(Producto);
        const data = await res.json();
            if(data.message === "Econtrado"){
                setProductos(initialState);
            }
        }else{
            await productosServer.updateProductos(params.id_producto, Producto);
        }        
        history.push("/");
        //console.log(data);
    } catch (error) {
        console.log(error);
    }
};

const getProducto = async(id_producto)=>{
    try {
        const res = await productosServer.getProductos(id_producto);
        const data = await res.json();
        const {nombre} = data.Productos;
        setProductos({ nombre });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    // eslint-disable-next-line
};

useEffect(() =>{
    if(params.id_producto){
        getProducto(params.id_producto);
    }
}, []);

    return(
        <div className = "row">
            <h2 className="mb-3 text-center">Formulario Producto</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <center><label id="txtTipo" className="form-label">Producto</label></center>
                <input type="text" name = "nombre" value = {Producto.nombre} onChange = {handleInputChange} className="form-control" />
            </div>
            {
                params.id_tipo?(
                    <button type="submit" className="btn btn-success">Editar</button>
                ) : (
                    <center><button type="submit" className="btn btn-primary">Submit</button></center>
                )
            }
            
        </form>

        </div>
    )
};

export default ProductoForms;