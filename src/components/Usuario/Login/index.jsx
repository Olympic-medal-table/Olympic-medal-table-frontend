import React, { useState } from 'react'

import email_icon from '../../../assets/icons8-email-24.png';
import password_icon from '../../../assets/icons8-password-24.png';

import classes from './Login.module.css'
import api from '../../API';


export default function LoginUsuario() {

    const [usuario, setUsuario] = useState({
        login:"",
        senha:"",
    })

    const{login, senha} = usuario;

    //atualiza os valores de nome, email e senha da variável usuario
    //quando algum valor é digitado nos campos de input
    const onInputChange=(e)=> {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        //evita que os dados digitados pelo usuário sejam passados para a url
        e.preventDefault();
        try {
            const response = await api.post("/login", usuario);
            const { token } = response.data;
            localStorage.setItem('token', token);
            window.location.href = '/';
            alert('Login bem-sucedido!');
        } catch (error) {
            console.error("Erro ao fazer login", error);
            alert('Erro ao fazer login. Verifique suas credenciais.');
        }
    };


    return (
        <div className={`${classes.container}`}>
            <div className='header'>
                <div className='text'>Acessar a conta</div>
                <div className='underline'></div>
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='inputs'>
                    <div className='input'>
                        <img src={email_icon} alt="" />
                        <input 
                        type="email"
                        name='login' 
                        value={login}
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
                        <button>Entrar</button>
                        
                    </div>
                </div>
            </form>
        </div>
      )
}
