import styles from '../css/gridCard.module.css';
import { Productos } from '../products';
import { Card } from './card';

export function GridCard() {
    return (
        <div className={styles.gridCard} id='galery'>
            <h3 className={styles.title}>Galeria</h3>
            <Card key={1} title='Nuevos' />
            <Card key={2} title='Destacados' />
            <Card key={3} title='Outfits' />
            <Card key={4} title='Tops' />
            <Card key={5} title='Pantalones' />
        </div>
    )
}