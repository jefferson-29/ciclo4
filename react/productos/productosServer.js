const Api_url = "http://127.0.0.1:8000/apps/tipos/";

export const listTipos = async () => {
    return await fetch(Api_url);
};

export const getTipo = async (idType) => {
    return await fetch(`${Api_url}${idType}`);
};

export const registerType = async (newType) => {
    return await fetch(Api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(newType.name).trim()
        })
    });
};

export const updateType = async (tipoId, updatedType) => {
    return await fetch(`${Api_url}${tipoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(updatedType.name).trim()
        })
    });
};

export const deleteType = async (idType) => {
    return await fetch(`${Api_url}${idType}`, {
        method: 'DELETE',        
    });
};
