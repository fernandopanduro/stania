import styles from '../css/gridCard.module.css';
import { Productos } from '../products';
import { Card } from './card';

export function GridCard() {
    return (
        <div className={styles.gridCard}>
            <h3 className={styles.title}>Galeria</h3>
            <Card title='Nuevos' />
            <Card title='Destacados' />
            <Card title='Outfits' />
            <Card title='Tops' />
            <Card title='Pantalones' />
        </div>
    )
}