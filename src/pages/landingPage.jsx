import { GridCard } from '../components/gridCard';
import styles from '../css/landingPage.module.css';
import { Banner } from './banner';

export function LandingPage() {
    return (
        <div className={`${styles.landingPage} container`}>
            <Banner />

            <div className=''>
                <GridCard />
            </div>

        </div>

    )
}