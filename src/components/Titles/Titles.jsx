import React from 'react';
import styles from './Titles.module.css';
import Segment from '../Segment';

const Titles = () => {
    return (
        <div className={styles.titles}>
           <Segment title='Popular on Netflix' />
           <Segment title='Continue Watching for Adnan' />
           <Segment title='Trending Now' />
           <Segment title='Watch it Again' />
           <Segment title='Award Winning T.V. Shows' />
        </div>
    )
}

export default Titles
