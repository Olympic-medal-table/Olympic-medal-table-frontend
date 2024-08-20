import { Link } from "react-router-dom"
import api from "../API"

import { useEffect, useState } from "react"

function Home(){
    const [paises, setPaises] = useState([])
    useEffect(() => {
        async function loadPaises() {
            let response = await api.get('/pais')
            console.log(response.data.content);
            setPaises(response.data.content) 
        }
        loadPaises();
    }, [])

    return (
        <div className="container">
            <div className="ranking-paises">
                {paises.map((pais) => {
                    return (
                        <div key={pais.codigoPais}>
                            <h2>{pais.nomePais}</h2>
                            <h3>Total de medalhas: {pais.quantidadeMedalhasTotais}</h3>
                            <h3>Medalhas de ouro: {pais.quantidadeMedalhasOuro}</h3>
                            <h3>Medalhas de prata: {pais.quantidadeMedalhasPrata}</h3>
                            <h3>Medalhas de bronze: {pais.quantidadeMedalhasBronze} </h3>
                            <Link to={`/pais/codigo/${pais.codigoPais}`}>Detalhar medalhas do país</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )


}export default Home;