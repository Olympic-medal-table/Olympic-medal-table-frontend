import React from 'react'
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';


export default function Cadastrarmedalhabutton() {

    const navigate = useNavigate();

  return (
      <button 
          className={`${styles.btnCadastrarMedalhaCustom} ${styles.btnOutlineLight}`}
          onClick={() => {
            window.location.href = '/medalha';
          }}
          >
          Cadastro de medalhas
      </button>
  )
}
