import styles from '../css/gridCard.module.css';
import { Card } from './card';

export function GridCard() {
    return (
        <div className={styles.gridCard}>
            <h3 className={styles.title}>Galeria</h3>
            <Card title='Destacados' />
            <Card title='Nuevos' />
            <Card title='Outfits' />
            <Card title='Tops' />
            <Card title='Pantalones' />
        </div>
    )
}