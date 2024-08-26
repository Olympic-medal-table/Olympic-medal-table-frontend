import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../API"
import Medalha from "../Medalha";

function Pais(){
    const{codigoPais}=useParams()
    const [pais, setPais] = useState({})
    const [loading, setLoading] = useState(true);
    const history = useNavigate()
    const token = localStorage.getItem('token');

    useEffect(() => {
        loadPais();
    }, []);

    const loadPais = async () => {
        const response = await api.get('pais/codigo/' + codigoPais);
        
        console.log(response.data);
        setPais(response.data);
        
    }

    const seguirPais = async () => {
        try {
            await api.post(`/usuario/codigoPais/${codigoPais}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            alert(`Seguindo o país ${pais.nomePais}`)
        } catch (error) {
            console.error("Erro ao seguir país", error);
            alert('Não foi possível seguir o país!');
        }
    }

    return(
        <div>
            <h1> {pais.nomePais} </h1>
            <button onClick={seguirPais}>Seguir país</button>
            <h3>Medalhas:</h3>
            <Medalha />
        </div>
    );


}export default Pais;