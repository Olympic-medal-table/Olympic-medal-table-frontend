import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import Home from '../Home';

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <div>
      <nav className={`${styles.navbar} ${styles.navbarExpandLg} ${styles.fixedTop} ${styles.navbarDark} ${styles.bgPrimary}`}>
        <div className={styles.containerFluid}>
          <a className={styles.navbarBrand} href="/">
            Olympic Medal Table
          </a>
          <button
            className={styles.navbarToggler}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
                navigate("/");
              }
            }
          >
            <span className={styles.navbarTogglerIcon}></span>
          </button>

          <button 
          className={`${styles.btnCustom} ${styles.btnOutlineLight}`}
          onClick={() => {
            navigate("/");
          }}
          >
            Entrar
          </button>
        </div>
      </nav>
    </div>
  );
}
