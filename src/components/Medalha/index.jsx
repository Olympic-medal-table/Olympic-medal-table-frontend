import React, { useState, useRef, useEffect } from "react";

import * as style from './Medalhaendpoint.module.css'
import Dropdownmedalha from "./Dropdownmedalha";
import Dropdownesporte from "./Dropdownesporte";
import Dropdownpais from "./Dropdownpais";

//to-do:
    //carregar lista de países
    //carregar lista de esportes
    //fazer lista suspensa pra
        //países
        //esportes
    // ok - lista do tipo de medalha: hard-coded (depois mudar pra lista suspensa)

export default function Medalhaendpoint() {
    
    //montar esse json com base no valor selecionado nas dropdowns
    const [medalha, setMedalha] = useState({
        idEsporte: null,
        codigoPais: "",
        tipoMedalha: ""
    })

    const{idEsporte, codigoPais, tipoMedalha} = medalha;
    
    return (
        <div>
            <Dropdownmedalha />
            <Dropdownesporte />
            <Dropdownpais />
        </div>
            
        
    );
}
