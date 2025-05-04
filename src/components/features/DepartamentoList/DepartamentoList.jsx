import {useEffect, useState} from "react";
import {getDepartamentos} from "../../../services/departamentoServico.js";

export default function DepartamentoList () {
    const [departamentos, setDepartamentos] = useState(null);
    const [erros, setError] = useState(null);

    useEffect(() => {
        const fetchDepartamentos = async() => {
            try {
                const departamentosData = await getDepartamentos();
                setDepartamentos(departamentosData);
                console.log(departamentos)
            } catch (e) {
                setError(e)
                console.log(erros)
            }
        }

        fetchDepartamentos();
    }, []);

    return (
        <div>
            <p>{{ departamentos }}</p>
        </div>
    );
}