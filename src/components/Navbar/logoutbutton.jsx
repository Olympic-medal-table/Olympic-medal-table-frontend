import React from 'react'
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';


export default function Logoutbutton() {

    const navigate = useNavigate();

  return (
      <button 
          className={`${styles.btnLogoutCustom} ${styles.btnOutlineLight}`}
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}
          >
          Sair
      </button>
  )
}
