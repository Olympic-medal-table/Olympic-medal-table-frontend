import React from 'react';
import styles from './Navbar.module.css';

import Home from '../Home';
import Loginbutton from './loginbutton';

export default function Navbar() {

  

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

          <Loginbutton />

        </div>
      </nav>
    </div>
  );
}
