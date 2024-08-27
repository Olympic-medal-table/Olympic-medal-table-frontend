import { useParams } from "react-router-dom";
import api from "../../API";
import './medalhacomponent.css';

import { useEffect, useState } from "react";

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
        <div>

        <h3>Medalhas:</h3>
                <table>
                    <thead>
                        <tr id='table-home'>
                            <th>#</th>
                            <th>Tipo de Medalha</th>
                            <th>Esporte</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medalhas.map((medalha) =>{
                            return(  
                                <tr key={medalha.idMedalha}>
                                    <td>{medalhas.indexOf(medalha) + 1} </td>
                                    <td>{medalha.tipoMedalha}</td>
                                    <td>{medalha.nomeEsporte}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    );


}export default Medalha;