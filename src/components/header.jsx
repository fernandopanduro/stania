import styles from '../css/header.module.css';

import { Link } from "react-router-dom";


/* import { AiFillInstagram } from 'react-icons/ai'; */

import { useState } from 'react';

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={`${styles.header}`}>

            <div className='container'>
                <div className={styles.barsMenu} onClick={() => setIsOpen(!isOpen)}>
                    <span className={`${styles.line1__barsMenu} ${isOpen && styles.activeline1__barsMenu}`}></span>
                    <span className={`${styles.line2__barsMenu} ${isOpen && styles.activeline2__barsMenu}`}></span>
                    <span className={`${styles.line3__barsMenu} ${isOpen && styles.activeline3__barsMenu}`}></span>
                </div>  

                <h1><Link to='/' className={styles.title}>STANIA</Link></h1>

                <a>IG{/* <AiFillInstagram size={30} /> */}</a>
            </div>

            <div className={`${styles.containerList} ${isOpen && styles.activecontainerList}`}>
                <nav className={styles.navbar}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><a href="#galery">Galeria</a></li>
                        <li className={styles.listItem}><a href="#about">Nosotros</a></li>
                        <li className={styles.listItem}><a href="#Shopping">Comprar</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}