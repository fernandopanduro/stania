import styles from '../css/shopping.module.css';

import img from '../imgs/store/shopping.jpg';
import imgWebp from '../imgs/store/shopping.webp';

import { Fade } from "react-reveal";


export function Shopping() {
    return (
        <div className={styles.shopping}>


            <Fade bottom>
                <h3 className={styles.title}>Comprar</h3>
                <p className='paragrath'>Como comprar en Stania?</p>
                <p className='paragrath'>Manda DM al instagram con la prenda que te gusta.</p>
                <p className='paragrath'>Te damos precio, mandas tu comprobante de pago y despues te mandamos  la guia de seguimiento ese mismo dia o al dia siguiente.</p>

                <picture>
                    <source srcSet={imgWebp} type='image/webp'/>
                    <img className={styles.img} src={img} alt="shopping" />
                </picture>
            </Fade>

        </div>
    )
}