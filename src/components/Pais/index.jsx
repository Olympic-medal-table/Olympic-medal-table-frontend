import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../API";
import Medalha from './medalhacomponent';


function Pais(){
    const{codigoPais}=useParams()
    const [pais, setPais] = useState({})
    const [loading, setLoading] = useState(true);
    const history = useNavigate()
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    useEffect(() => {
        loadPais();
    }, []);

    const loadPais = async () => {
        try {
            const response = await api.get(`pais/codigo/${codigoPais}`);
            setPais(response.data);
        } catch (error) {
            console.error("Erro ao carregar o país", error);
            alert('Não foi possível carregar os dados do país!');
        } finally {
            setLoading(false);
        }
    };

    const seguirPais = async () => {
        try {
            await api.post(`/usuario/codigoPais/${codigoPais}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert(`Seguindo o país ${pais.nomePais}`);
        } catch (error) {
            console.error("Erro ao seguir país", error);
            alert('Não foi possível seguir o país!');
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>{pais.nomePais}</h1>
            <button onClick={seguirPais}>Seguir país</button>
            <h3>Medalhas:</h3>
            <Medalha />
        </div>
    );
}

export default Pais;
