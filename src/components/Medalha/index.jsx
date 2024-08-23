import { Link } from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom";
import api from "../API"

import { useEffect, useState } from "react"

function Medalha(){
    const{codigoPais}=useParams()
    const[medalhas, setMedalhas] = useState([])

    useEffect(() => {
        loadMedalha();
    }, [])

    const loadMedalha = async () =>{
        const response = await api.get('pais/codigo/' + codigoPais);
        setMedalhas(response.data.medalhas);
    }

    return(
        <div className="container">
            {medalhas.map((medalha) =>{
                return(
                    <div key={medalha.idMedalha}>
                        <h3>{medalhas.indexOf(medalha) + 1} : {medalha.tipoMedalha}, {medalha.nomeEsporte}</h3>
                    </div>
                )
            })}
        </div>
    );


}export default Medalha;