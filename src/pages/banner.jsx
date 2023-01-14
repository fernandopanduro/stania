import styles from '../css/banner.module.css'

/* Images */
import img from '../imgs/store/clothingStore.jpg';
import imgWebp from '../imgs/store/clothingStore.webp';
import imgAvif from '../imgs/store/clothingStore.avif';

export function Banner() {
    return (
        <section className={`${styles.banner} container`}>
            <picture className={styles.containerImage}>
                <source srcSet={imgAvif} type='image/avif' />
                <source srcSet={imgWebp} type='image/webp' />
                <img className={styles.image} src={img} alt="Tienda de Stania" />
            </picture>
            <div className={styles.cover}>
                <h2 className={styles.title}>Stania Clothing</h2>
                <h3 className={styles.subtitle}>CREANDO PERFECCION</h3>
            </div>
        </section>
    )
}