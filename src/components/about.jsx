import styles from '../css/about.module.css';

import img from '../imgs/store/clothing.jpg';
import imgWebp from '../imgs/store/clothing.webp';
import imgAvif from '../imgs/store/clothing.avif';

import { Fade } from "react-reveal";


export function About() {
    return (
        <div className={styles.about} id='about'>

                <div className={styles.containerDescription}>

                    <div className={styles.description}>
                        <Fade bottom>
                            <h3 className={styles.title}>Nosotros</h3>
                            <p className='paragrath'>Stania es conocida por su elegancia y sofisticacion. Se especializa en ropa de alta calidad para mujeres, telas de alta gama.</p>
                            <p className='paragrath'>La marca es popular entre celebridades y personas reconocidas con alto valor.</p>
                            <p className='paragrath'>Nuestros diseños son modernos y elegantes, con un toque de sotifiscacion clasica. Calidad de los materiales y la atencion al detalle en la confeccion.</p>
                        </Fade>
                    </div>
                    
                    <Fade bottom>
                        <picture className={styles.picture}>
                            <source srcSet={imgAvif} type='image/avif'/>
                            <source srcSet={imgWebp} type='image/webp'/>
                            <img className={styles.img} src={img} alt="Clothing" loading='lazy'/>
                        </picture>
                    </Fade>

                </div>

            <Fade bottom>

                <p className='paragrath'>Envios a toda la Republica Mexicana.</p>

                <p className='paragrath'>Entregas personales en Guadalajara, se acuerda punto de entrega.</p>

                <p className='paragrath'>Sucursal asociada en Mazatlan Av. De Las Torres 5624. Real Del Valle.</p>

                <iframe title='Google maps Stania' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1023.1747477336936!2d-106.43093194365646!3d23.286745480824024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sReal%20del%20Valle%2C%20Mazatl%C3%A1n%2C%20Sinaloa%20avenida%20de%20las%20torres%20!5e0!3m2!1ses-419!2smx!4v1673748749224!5m2!1ses-419!2smx" loading="lazy" className={styles.map}></iframe>
                
            </Fade>

        </div>
    )
}