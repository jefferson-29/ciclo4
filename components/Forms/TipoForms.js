import React, { useState } from 'react';
import * as productosServer from '../productos/productosServer';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const TipoForms =()=>{
    const history = useHistory();
    const params = useParams();

    console.log(params);

    const initialState = {id_tipo:0, name:""};

    const [Tipo, setTipos] = useState(initialState);

    const handleInputChange=(e)=>{
    //console.log(e.target.tipo);
    //console.log(e.target.value);
    setTipos({ ...Tipo, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        let res;
        if(!params.id_tipo){
            res = await productosServer.registerType(Tipo);
        const data = await res.json();
            if(data.message === "Econtrado"){
                setTipos(initialState);
            }
        }else{
            await productosServer.updateType(params.id_tipo, Tipo);
        }        
        history.push("/");
        //console.log(data);
    } catch (error) {
        console.log(error);
    }
};

const getTipo = async(id_tipo)=>{
    try {
        const res = await productosServer.getTipo(id_tipo);
        const data = await res.json();
        const {name} = data.Tipos;
        setTipos({ name });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    // eslint-disable-next-line
};

useEffect(() =>{
    if(params.id_tipo){
        getTipo(params.id_tipo);
    }
}, []);

    return(
        <div className = "col-md-3 mx- auto">
            <h2 className="mb-3 text-center">Formulario Tipo</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label id="txtTipo" className="form-label">Tipo</label>
                <input type="text" name = "name" value = {Tipo.name} onChange = {handleInputChange} className="form-control" />
            </div>
            {
                params.id_tipo?(
                    <button type="submit" className="btn btn-success">Editar</button>
                ) : (
                    <button type="submit" className="btn btn-primary">Submit</button>
                )
            }
            
        </form>

        </div>
    )
};

export default TipoForms;