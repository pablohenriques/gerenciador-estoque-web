import api from "../api/api.js";

const getDepartamentos = async () => {
    try {
        const response = await api.get('/departamento/getall');
        console.log('response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar departamentos:', error);
        throw error;
    }
}

export {
    getDepartamentos
}