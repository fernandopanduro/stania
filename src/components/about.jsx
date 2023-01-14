import styles from '../css/about.module.css';

import img from '../imgs/store/clothing.jpg';
import imgWebp from '../imgs/store/clothing.webp';
import imgAvif from '../imgs/store/clothing.avif';

export function About() {
    return (
        <div className={styles.about}>
            <h3 className={styles.title}>Nosotros</h3>
            
            <p className='paragrath'>Stania es conocida por su elegancia y sofisticacion. Se especializa en ropa de alta calidad para mujeres, telas de alta gama.</p>

            <p className='paragrath'>La marca es popular entre celebridades y personas reconocidas con alto valor.</p>

            <p className='paragrath'>Nuestros diseños son modernos y elegantes, con un toque de sotifiscacion clasica. Calidad de los materiales y la atencion al detalle en la confeccion.</p>

            <picture>
                <source srcSet={imgAvif} type='image/avif'/>
                <source srcSet={imgWebp} type='image/webp'/>
                <img className={styles.img} src={img} alt="Clothing" loading='lazy'/>
            </picture>

            <p className='paragrath'>Envios a toda la Republica Mexicana.</p>

            <p className='paragrath'>Entregas personales en Guadalajara, se acuerda punto de entrega.</p>

            <p className='paragrath'>Sucursal asociada en Mazatlan Av. De Las Torres 5624. Real Del Valle.</p>

        </div>
    )
}