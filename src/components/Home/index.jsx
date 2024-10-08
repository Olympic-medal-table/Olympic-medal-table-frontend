import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../API";
import classes from './home.module.css';


function Home(){
    const [paises, setPaises] = useState([])
    useEffect(() => {
        async function loadPaises() {
            let response = await api.get('/pais/commedalha?size=100')
                console.log(response.data.content);
                setPaises(response.data.content) 
        }
        loadPaises();
    }, [])

    return (
        <div className={`${classes.ptable}`}>
            <h1 className={`${classes.headin}`}>Ranking de Medalhas</h1>
                <table >
                    <tr className={`${classes.col}`}>
                        <th>#</th>
                        <th>País</th>
                        <th>Ouro</th>
                        <th>Prata</th>
                        <th>Bronze</th>
                        <th>Total</th>
                        <th></th>							             
                    </tr>
                    {paises.map((pais) => {
                        return (                            
                                <tr className={`${classes.wpos}`} key={pais.codigoPais}>
                                    <td>{paises.indexOf(pais)+1}</td>
                                    <td>{pais.nomePais}</td>                                
                                    <td>{pais.quantidadeMedalhasOuro}</td>
                                    <td>{pais.quantidadeMedalhasPrata}</td>
                                    <td>{pais.quantidadeMedalhasBronze} </td>
                                    <td>{pais.quantidadeMedalhasTotais}</td>
                                    <td>
                                        <button className={classes.button} >
                                            <Link to={`/pais/codigo/${pais.codigoPais}`} className={classes.link}>Detalhar</Link>
                                        </button>
                                    </td>
                                </tr>                            
                        );
                    })}
                </table>
        </div>
    )


}export default Home;