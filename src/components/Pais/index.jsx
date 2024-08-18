import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../API"

function Pais(){
    const{codigo}=useParams()
    const [pais, setPais] = useState({})
    const [loading, setLoading] = useState(true);
    const history = useNavigate()

    useEffect(() => {
        loadPais();
    }, []);

    const loadPais = async () => {
        const response = await api.get('pais/' + codigo);
        // o [0] abaixo é necessário porque o response.data é um Array com apenas um elemento,
        // então é necessário acessar esse elemento através do índice, que é 0
        setPais(response.data[0]);
        
    }

    return(
        <div>
            <h1> {pais.nome} </h1>
            <h3>Medalhas: {pais.medalhas}</h3>
            <h3>Seguidores: {pais.usuarios}</h3>
        </div>
    );


}export default Pais;