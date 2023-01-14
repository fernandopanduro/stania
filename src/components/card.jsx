import img from '../imgs/catalogo/blazer.jpg';
import imgAvif from '../imgs/catalogo/blazer.avif';
import imgWebp from '../imgs/catalogo/blazer.webp';

import img2 from '../imgs/catalogo/jogger.jpg';
import img2Webp from '../imgs/catalogo/jogger.webp';

import styles from '../css/card.module.css';

export function Card({title}) {
    return (
        <div className={styles.card}>
            <h4 className={styles.title}>{title}</h4>

            <div className={styles.imgContainer}>

                <picture>
                    <source srcSet={imgAvif} type="image/avif" />
                    <source srcSet={imgWebp} type="image/webp" />
                    <img className={styles.img} src={img} alt="Blazer" />
                </picture>

                <picture>
                    <source srcSet={img2Webp} type="image/webp" />
                    <img className={styles.img} src={img2} alt="Jogger" />
                </picture>
            </div> 
        </div>
        
    )
}