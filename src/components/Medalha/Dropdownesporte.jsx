import React, { useState, useRef, useEffect } from "react";

import api from "../API";
import * as style from './Medalhaendpoint.module.css'
import axios from "axios";

export default function Dropdownesporte() {
    
    const [esportes, setEsportes] = useState([])
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    useEffect(() => {
          async function loadEsportes() {
              let response = await api.get('/esporte?size=50', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
              console.log(response.data.content)
              setEsportes(response.data.content)
          }
          loadEsportes();
    }, [])

    const container = useRef();
    const [dropdownState, setDropdownState] = useState({ open: false });
   
    const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });
   
    const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
    setDropdownState({ open: false });
    }
    };
   
    // attaches an eventListener to listen when componentDidMount
    useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // optionally returning a func in useEffect runs like componentWillUnmount to cleanup
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
   
    return (
    <div className={style.container} ref={container}>
         <button
    type="button"
    className={style.button}
    onClick={handleDropdownClick}
    >
           Esporte
         </button>
    {dropdownState.open && ( 
    <div className={style.dropdown}>
             <ul>
             {esportes.map((esporte) => {
                return(
                    <li key={esporte.id}>{esporte.nome}</li>
                );
                })
            }
             </ul>
           </div>
         )}
       </div>
    );
}
