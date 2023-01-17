import styles from '../css/header.module.css';

import { Link } from "react-router-dom";

import {FiMapPin} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

import { useState } from 'react';
import { Fade } from 'react-reveal';

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fade top>
            <header className={`${styles.header}`}>

                <div className='container'>
                    <div className={styles.barsMenu} onClick={() => setIsOpen(!isOpen)}>
                        <span className={`${styles.line1__barsMenu} ${isOpen && styles.activeline1__barsMenu}`}></span>
                        <span className={`${styles.line2__barsMenu} ${isOpen && styles.activeline2__barsMenu}`}></span>
                        <span className={`${styles.line3__barsMenu} ${isOpen && styles.activeline3__barsMenu}`}></span>
                    </div>  

                    <h1><Link to='/' className={styles.title}>STANIA</Link></h1>

                    <a name="Instagram de Stania" href='https://www.instagram.com/stania_mx/' target='_blank'><BsInstagram size={27} /></a>
                </div>

                <div className={`${styles.containerList} ${isOpen && styles.activecontainerList}`}>
                    <nav className={styles.navbar}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><a name="Galeria" href="#galery">Galeria</a></li>
                            <li className={styles.listItem}><a name="Comprar" href="#shopping">Comprar</a></li>
                            <li className={styles.listItem}><a name="Nosotros" href="#about">Nosotros</a></li>
                        </ul>
                        <ul className={styles.list__socialMedia}>
                            <li><a name="Instagram de Stania" href='https://www.instagram.com/stania_mx/' target='_blank'><BsInstagram size={25} /></a></li>
                            <li><a name="Facebook de Stania" href='https://www.facebook.com/profile.php?id=100088231982126' target='_blank'><FaFacebookF size={25} /></a></li>
                            <li><a name="Mapa de Stania" href='#'><FiMapPin size={25} /></a></li>
                        </ul>
                    </nav>
                </div>

            </header>
        </Fade>
    )
}