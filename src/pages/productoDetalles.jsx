import {Productos} from '../products';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {Fade} from 'react-reveal';

import {BsInstagram} from 'react-icons/bs';

import styles from '../css/productoDetalles.module.css';
import { Shopping } from '../components/shopping';
import { Card } from '../components/card';
import { Helmet } from 'react-helmet';


export function ProductoDetalles() {

    const {productoId} = useParams();

    const {Destacados, Nuevos, Outfits, Tops, Pantalones} = Productos;

    let img1, img2, img3, img4, imagenes, descripcion, id;

    Destacados.map((producto) => {
        if (producto.Id == productoId) {
            descripcion = producto.Descripcion;
            id = producto.Id;
            [img1, img2, img3, img4] = producto.Imagenes;
            imagenes = producto.Imagenes;
        }
    })
    Nuevos.map((producto) => {
        if (producto.Id == productoId) {
            descripcion = producto.Descripcion;
            id = producto.Id;
            [img1, img2, img3, img4] = producto.Imagenes;
            imagenes = producto.Imagenes;
        }
    })
    Outfits.map((producto) => {
        if (producto.Id == productoId) {
            descripcion = producto.Descripcion;
            id = producto.Id;
            [img1, img2, img3, img4] = producto.Imagenes;
            imagenes = producto.Imagenes;
        }
    })
    Tops.map((producto) => {
        if (producto.Id == productoId) {
            descripcion = producto.Descripcion;
            id = producto.Id;
            [img1, img2, img3, img4] = producto.Imagenes;
            imagenes = producto.Imagenes;
        }
    })
    Pantalones.map((producto) => {
        if (producto.Id == productoId) {
            descripcion = producto.Descripcion;
            id = producto.Id;
            [img1, img2, img3, img4] = producto.Imagenes;
            imagenes = producto.Imagenes;

        }
    })

    // Cambiar Imagen
    const [img, setImg] = useState(img1);

    const hoverHandler = (imagen, i) => {
        setImg(imagen);
    }

    return (
            <section className={`container ${styles.ProductoDetalles}`} >

            <Helmet>
                <title> Productos 👗 | Stania 🔥</title>
                <meta name="description" content={descripcion} />
            </Helmet>

            <div className={styles.contentDescription}>
                <div className={styles.imagenes} id='productDetails'>

                    <div className={styles.containerImagen}>
                        <Fade bottom>
                            <img className={styles.imagen} src={img} alt="" />
                        </Fade>
                    </div>

                    <div className={styles.imagenSecundaria}>
                        <Fade bottom>
                            {
                                imagenes.map((imagen, i) => (
                                    <img 
                                    src={imagen} 
                                    className=''
                                    onMouseOver={() => hoverHandler(imagen, i)}
                                    key={i}
                                    />
                                ))
                            }
                        </Fade>
                    </div>

                </div>

                <div className={styles.detalles}>
                    <Fade bottom>
                        <h3 className={`paragrath ${styles.titulo}`} >{descripcion}</h3>   
                        <a name="Instagram de Stania" className={styles.btn} href="https://www.instagram.com/stania_mx/" target='_blank'>Comprar en {<BsInstagram size={23} className={styles.ig} />}</a>
                    </Fade>
                </div>
            </div>


                <hr className={styles.hr} />

                <Shopping />

                <hr className={styles.hr} />

                <Card title='Nuevos' />
                <Card title='Destacados' />

            </section>
        )
}