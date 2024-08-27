import React, { useState } from 'react'

import user_icon from '../../../assets/icons8-person-24.png';
import email_icon from '../../../assets/icons8-email-24.png';
import password_icon from '../../../assets/icons8-password-24.png';

import classes from './Cadastro.module.css'
import api from '../../API';
import { useNavigate } from 'react-router-dom';


export default function CadastroUsuario() {

    const defaultRoles = [        
        {
            id: 2,
            nome: "USER"
        }
    ]

    const [usuario, setUsuario] = useState({
        nome:"",
        email:"",
        senha:"",
        roles: defaultRoles
    })

    const{nome, email, senha} = usuario;

    //atualiza os valores de nome, email e senha da variável usuario
    //quando algum valor é digitado nos campos de input
    const onInputChange=(e)=> {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        //evita que os dados digitados pelo usuário sejam passados para a url
        e.preventDefault();
        await api.post("/usuario", usuario);
        alert("Cadastro realizado com sucesso!")
        window.location.href = '/login'
    };

  return (
    <div className={`${classes.container}`}>
        <div className='header'>
            <div className='text'>Cadastro</div>
            <div className='underline'></div>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt="" />
                    <input 
                    type="text"
                    name='nome' 
                    value={nome}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input 
                    type="email"
                    name='email' 
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input 
                    type="password"
                    name='senha' 
                    value={senha}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='submit-container'>
                    <button>Cadastrar</button>
                    
                </div>
            </div>
        </form>
    </div>
  )
}
