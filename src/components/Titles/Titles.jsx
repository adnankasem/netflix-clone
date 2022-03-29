import React from 'react';
import styles from './Titles.module.css';
import Segment from '../Segment';

const Titles = ({category, comedy, action, documentaries, family, scifi}) => {
    return (
        <div className={styles.titles}>
           <Segment category={action} title='Popular on Netflix' />
           <Segment category={comedy} title='Best in Comedy' />
           <Segment category={documentaries} title='Documentaries' />
           <Segment category={family} scifi={scifi} title='Family' />
           <Segment category={scifi} title='SciFi' />
        </div>
    )
}

export default Titles
