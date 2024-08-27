import React, { useState, useRef, useEffect } from "react";
import api from "../API";
import * as style from './Medalhaendpoint.module.css';
import axios from "axios";

export default function Dropdownesporte({ onSelectEsporte }) {
    const [esportes, setEsportes] = useState([]);
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    useEffect(() => {
        async function loadEsportes() {
            let response = await api.get('/esporte?size=50', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setEsportes(response.data.content);
        }
        loadEsportes();
    }, [token]);

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

    const handleEsporteSelect = (idEsporte) => {
        onSelectEsporte(idEsporte); // Passa o valor selecionado para o componente pai
        setDropdownState({ open: false }); // Fecha o dropdown após a seleção
    };

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
                        {esportes.map((esporte) => (
                            <li key={esporte.id} onClick={() => handleEsporteSelect(esporte.id)}>
                                {esporte.nome}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
