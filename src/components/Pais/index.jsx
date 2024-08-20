import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../API"

function Pais(){
    const{codigoPais}=useParams()
    const [pais, setPais] = useState({})
    const [loading, setLoading] = useState(true);
    const history = useNavigate()

    useEffect(() => {
        loadPais();
    }, []);

    const loadPais = async () => {
        const response = await api.get('pais/codigo/' + codigoPais);
        
        console.log(response.data);
        setPais(response.data);
        
    }

    return(
        <div>
            <h1> {pais.nomePais} </h1>
            <h3>Medalhas: em breve, listagem de medalhas aqui</h3>
            
        </div>
    );


}export default Pais;