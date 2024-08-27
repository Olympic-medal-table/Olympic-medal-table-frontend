import React, { useState, useRef, useEffect } from "react";
import api from "../API";
import * as style from './Medalhaendpoint.module.css';

export default function Dropdownpais({ onSelectPais }) {
    const [paises, setPaises] = useState([]);

    useEffect(() => {
        async function loadPaises() {
            let response = await api.get('/pais?size=100');
            const sortedPaises = response.data.content.sort((a, b) => 
                a.nomePais.localeCompare(b.nomePais)
            );
            setPaises(sortedPaises);
        }
        loadPaises();
    }, []);

    const container = useRef();
    const [dropdownState, setDropdownState] = useState({ open: false });

    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });

    const handleClickOutside = (e) => {
        if (container.current && !container.current.contains(e.target)) {
            setDropdownState({ open: false });
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handlePaisSelect = (codigoPais) => {
        onSelectPais(codigoPais); // Passa o valor selecionado para o componente pai
        setDropdownState({ open: false }); // Fecha o dropdown após a seleção
    };

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
                        {paises.map((pais) => (
                            <li key={pais.idPais} onClick={() => handlePaisSelect(pais.codigoPais)}>
                                {pais.nomePais}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
