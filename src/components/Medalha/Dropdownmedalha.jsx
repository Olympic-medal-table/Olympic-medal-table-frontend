import React, { useState, useRef, useEffect } from "react";

import * as style from './Medalhaendpoint.module.css'

export default function Dropdownmedalha() {
    const tiposMedalha = [
        {tipoMedalha: "OURO"},
        {tipoMedalha: "PRATA"},
        {tipoMedalha: "BRONZE"}
    ]

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
           Tipo de medalha
         </button>
    {dropdownState.open && ( 
    <div className={style.dropdown}>
             <ul>
             {tiposMedalha.map((medalha) => {
                return(
                    <li key={medalha.tipoMedalha}>{medalha.tipoMedalha}</li>
                );                
                })
            }
             </ul>
           </div>
         )}
       </div>
    );
}
