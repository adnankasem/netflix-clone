import React from 'react'
import styles from './Segment.module.css'
import placeHolderImg from './assets/thumbnail-top10-h.jpg';
import { ChevronRightIcon } from './ChecvronRightIcon';

export const Segment = ({category, title}) => {
    return (
        <div className={styles.segment}>
            <p className={styles.title}>{title}
                <span className={styles.icon}>
                    <svg width="8" height="8" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 3L21 20.5L3.5 38" stroke="white" stroke-width="4" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
                </span>
            </p>
            <div className={styles.row}>
            
                {
                    category.filter(item => item.backdrop_path).map(item => {
                        return (
                            <div key={item.id} className={styles.movie}>
                                <img src={`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`} alt="item.title" />
                                <p>{item.title}</p>
                            </div>
                        )  
                    })
                }
                {/* <img src={placeHolderImg} alt="" />
                <img src={placeHolderImg} alt="" />
                <img src={placeHolderImg} alt="" />
                <img src={placeHolderImg} alt="" />
                <img src={placeHolderImg} alt="" />
                <img src={placeHolderImg} alt="" /> */}
            </div>

            <button className={styles.button}>
                <ChevronRightIcon />
            </button>
            
            
        </div>
    )
}
