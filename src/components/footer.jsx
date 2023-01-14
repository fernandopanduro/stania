import styles from '../css/footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer} container`}>

                <div className={styles.listContainer}>
                    <h4 className={styles.subtitle}>Stania Clothing</h4>
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
                        <li className={styles.listItem}><a href="">Condiciones</a></li>
                        <li className={styles.listItem}><a href="">Privacidad</a></li>
                        <li className={styles.listItem}><a href="">Devoluciones</a></li>
                    </ul>
                </div>

                <div>
                    <p className={styles.listItem}>Todos los derechos reservados a <span className={styles.subtitle}>Stania Clothing</span></p>
                </div>

            </div>
        </footer>
    )
}