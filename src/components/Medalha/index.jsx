import React, { useState } from "react";
import api from "../API";
import * as style from './Medalhaendpoint.module.css';
import Dropdownmedalha from "./Dropdownmedalha";
import Dropdownesporte from "./Dropdownesporte";
import Dropdownpais from "./Dropdownpais";

export default function Medalhaendpoint() {
    const [medalha, setMedalha] = useState({
        idEsporte: null,
        codigoPais: "",
        tipoMedalha: ""
    });

    const { idEsporte, codigoPais, tipoMedalha } = medalha;

    const handleMedalhaSelect = (tipoMedalha) => {
        setMedalha({ ...medalha, tipoMedalha });
    };

    const handlePaisSelect = (codigoPais) => {
        setMedalha({ ...medalha, codigoPais });
    };

    const handleEsporteSelect = (idEsporte) => {
        setMedalha({ ...medalha, idEsporte });
    };

    const handleSubmit = async () => {
        try {
            const response = await api.post('/medalha', medalha);
            console.log("Medalha enviada com sucesso:", response.data);
        } catch (error) {
            console.error("Erro ao enviar medalha:", error);
        }
    };

    return (
        <div>
            <Dropdownmedalha onSelectMedalha={handleMedalhaSelect} />
            <Dropdownesporte onSelectEsporte={handleEsporteSelect} />
            <Dropdownpais onSelectPais={handlePaisSelect} />
            <button onClick={handleSubmit}>Enviar Medalha</button>
        </div>
    );
}
