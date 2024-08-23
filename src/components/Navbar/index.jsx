import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div>
      <nav className={`${styles.navbar} ${styles.navbarExpandLg} ${styles.fixedTop} ${styles.navbarDark} ${styles.bgPrimary}`}>
        <div className={styles.containerFluid}>
          <a className={styles.navbarBrand} href="#">
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
          >
            <span className={styles.navbarTogglerIcon}></span>
          </button>

          <button className={`${styles.btnCustom} ${styles.btnOutlineLight}`}>Entrar</button>
        </div>
      </nav>
    </div>
  );
}
