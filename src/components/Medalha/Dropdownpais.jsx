import React, { useState, useRef, useEffect } from "react";

import api from "../API";
import * as style from './Medalhaendpoint.module.css'

export default function Dropdownpais() {
    
    const [paises, setPaises] = useState([])
    

    useEffect(() => {
      async function loadPaises() {
          let response = await api.get('/pais?size=100')
              console.log(response.data.content);
              const sortedPaises = response.data.content.sort((a, b) => 
                a.nomePais.localeCompare(b.nomePais)
            );
            setPaises(sortedPaises); 
      }
      loadPaises();
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
           País
         </button>
    {dropdownState.open && ( 
    <div className={style.dropdown}>
             <ul>
             {paises.map((pais) => {
                return(
                    <li key={pais.id}>{pais.nomePais}</li>
                );                
                })
            }
             </ul>
           </div>
         )}
       </div>
    );
}
