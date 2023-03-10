import styles from '../css/footer.module.css';

import { Link } from "react-router-dom";

import {FiMapPin} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

import {Fade} from 'react-reveal';  



export function Footer() {
    return (
        <Fade bottom>
            <footer className={styles.footer}>
                <div className={`${styles.footerContainer} container`}>

                    <div className={styles.listContainer}>
                        <h4 className={styles.subtitle}><Link to='/'>Stania Clothing</Link></h4>
                        <ul className={styles.list__socialMedia}>
                            <li><a name='Instagram de Stania' href='https://www.instagram.com/stania_mx/' target='_blank'><BsInstagram size={25} /></a></li>
                            <li><a name='Facebook de Stania' href='https://www.facebook.com/profile.php?id=100088231982126' target='_blank'><FaFacebookF size={25} /></a></li>
                            <li><a name='Mapa de Stania' href='#'><FiMapPin size={25} /></a></li>
                        </ul>
                    </div>

                    <div className={styles.listContainer}>
                        <h4 className={styles.subtitle}>Menu</h4>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><a name='Inicio' href="#">Inicio</a></li>
                            <li className={styles.listItem}><a name='Galeria' href="#galery">Galeria</a></li>
                            <li className={styles.listItem}><a name='Nosotros' href="#about">Nosotros</a></li>
                            <li className={styles.listItem}><a name='Comprar' href="#shopping">Comprar</a></li>
                        </ul>
                    </div>

                    <div className={styles.listContainer}>
                        <h4 className={styles.subtitle}>Terminos</h4>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><Link to='/condiciones'>Condiciones</Link></li>
                            <li className={styles.listItem}><Link to='/privacidad'>Privacidad</Link></li>
                            <li className={styles.listItem}><Link to='/devoluciones'>Devoluciones</Link></li>
                        </ul>
                    </div>

                    <div>
                        <p className={styles.listItem}>Todos los derechos reservados a <span className={styles.subtitle}><Link to='/'>Stania Clothing</Link></span></p>
                    </div>

                </div>

            </footer>
        </Fade>
    )
}