import styles from '../css/banner.module.css'

/* Images */
import img from '../imgs/store/clothingStore.jpg';
import imgWebp from '../imgs/store/clothingStore.webp';
import imgAvif from '../imgs/store/clothingStore.avif';

import {Fade} from 'react-reveal'

import {MdOutlineArrowForwardIos} from 'react-icons/md'

export function Banner() {
    return (
        <section className={`${styles.banner} container`}>
            <Fade>
                <picture className={styles.containerImage}>
                    <source srcSet={imgAvif} type='image/avif' />
                    <source srcSet={imgWebp} type='image/webp' />
                    <img width='100%' className={styles.image} src={img} alt="Tienda de Stania" />
                </picture>
            </Fade>
            <div className={styles.cover}>
                <Fade bottom>
                    <h2 className={styles.title}>Stania Clothing</h2>
                    <h3 className={styles.subtitle}>CREANDO PERFECCION</h3>
                </Fade>
            </div>
            <Fade bottom>
                <div className={styles.arrows}>
                    <MdOutlineArrowForwardIos className={styles.arrow} size={30} />
                    <MdOutlineArrowForwardIos className={styles.arrow} size={30} />
                </div>
            </Fade>
        </section>
    )
}