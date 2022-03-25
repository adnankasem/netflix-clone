import React from 'react';
import styles from './Billboard.module.css';
import billboardHeroImg from './assets/billboard.webp';
import billboardHeroTitle from './assets/billboard-title.webp';
import {PlayIcon} from './PlayIcon'
import { InfoIcon } from './InfoIcon';


const Billboard = () => {
    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
            {/* <div className={styles.heroImage}> */}
            <img src={billboardHeroImg} alt="" />
            <div className={styles.fadeOut}></div>
            {/* </div> */}
                
                <div className={styles.info}>
                    <img src={billboardHeroTitle} alt="Abstract: The Art of Design" />
                    <div className={styles.description}>
                    As Alfred the Great defends his kingdom from Norse invaders, Uhtred -- born a Saxon but raised by Vikings -- seeks to claim his ancestral birthright.
                    </div>
                    <div className={styles.links}>
                        <a href='/'>
                            <PlayIcon />
                            <span>Play</span>
                        </a>
                        <button type='button'>
                        <InfoIcon />
                        <span>More Info</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard
