import styles from '../css/card.module.css';

import { Productos } from '../products';

import {Fade} from 'react-reveal';


export function Card({title}) {

    const Destacados = Productos.Destacados;
    const Nuevos = Productos.Nuevos;
    const Outfits = Productos.Outfits;
    const Tops = Productos.Tops;
    const Pantalones = Productos.Pantalones;

    return (
        <div className={styles.card}>
            <h4 className={styles.title}>{title}</h4>

            <div className={styles.imgContainer}>

                {
                    title == "Destacados" ?
                    Destacados.map((producto) =><Fade right><picture><img className={styles.img} src={producto.Imagenes[0]} alt="" /></picture></Fade>)
                    : title == "Nuevos" ?
                    Nuevos.map((producto) => <Fade right><picture><img className={styles.img} src={producto.Imagenes[0]} alt="" /></picture></Fade>)
                    : title == "Outfits" ?
                    Outfits.map((producto) => <Fade right><picture><img className={styles.img} src={producto.Imagenes[0]} alt="" /></picture></Fade>)
                    : title == "Tops" ?
                    Tops.map((producto) => <Fade right><picture><img className={styles.img} src={producto.Imagenes[0]} alt="" /></picture></Fade>)
                    : Pantalones.map((producto) => <Fade right><picture><img className={styles.img} src={producto.Imagenes[0]} alt="" /></picture></Fade>)
                }

            </div> 
            
        </div>
        
    )
}