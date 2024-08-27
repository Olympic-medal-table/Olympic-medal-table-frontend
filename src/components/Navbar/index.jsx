import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

import Home from '../Home';
import Loginbutton from './loginbutton';
import Logoutbutton from './logoutbutton';
import api from "../API";
import axios from 'axios';
import Cadastrarmedalhabutton from './cadastrarmedalhabutton';

export default function Navbar() {

  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const [roles, setRoles] = useState([])

  useEffect(() => {
    async function loadRoles() {
      const response = await api.post('/usuario/roles',{}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data.roles[0].role);
      setRoles(response.data.roles)
    }
    loadRoles();
  }, [])

  const ehAdmin = roles.some(r =>{
    if(r.role === 'ADMIN')
      return true;
  })

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
           {
                ehAdmin ? <Cadastrarmedalhabutton /> : <div></div>
           }
          {token ? <Logoutbutton /> : <Loginbutton />}

        </div>
      </nav>
    </div>
  );
}
