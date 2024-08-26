import React from 'react'
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

export default function Loginbutton() {

    const navigate = useNavigate();

  return (
    <button 
          className={`${styles.btnLoginCustom} ${styles.btnOutlineLight}`}
          onClick={() => {
            navigate("/login");
          }}
          >
            Entrar
          </button>
  )
}
