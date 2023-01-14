import styles from '../css/footer.module.css';

import { Link } from "react-router-dom";


export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer} container`}>

                <div className={styles.listContainer}>
                    <h4 className={styles.subtitle}><Link to='/'>Stania Clothing</Link></h4>
                    <ul className={styles.list__socialMedia}>
                        <li><a href=""></a>IG</li>
                        <li><a href=""></a>FB</li>
                        <li><a href=""></a>Map</li>
                    </ul>
                </div>

                <div className={styles.listContainer}>
                    <h4 className={styles.subtitle}>Menu</h4>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><a href="#">Inicio</a></li>
                        <li className={styles.listItem}><a href="#galery">Galeria</a></li>
                        <li className={styles.listItem}><a href="#about">Nosotros</a></li>
                        <li className={styles.listItem}><a href="#shopping">Comprar</a></li>
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
    )
}