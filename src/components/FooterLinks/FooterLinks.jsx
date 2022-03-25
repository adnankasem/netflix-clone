import React from 'react';
import styles from './FooterLinks.module.css';

const FooterLinks = () => {

    // Change to an object in the future if you want to add proper links to it so we can add a name propert, link property etc
    const links = [
        'Audio and Subtitles',
        'Media Center',
        'Privacy',
        'Contact Us',
        'Audio Description',
        'Investor Relations',
        'Legal Notices',
        'Help Center',
        'Jobs',
        'Cookie Preferences',
        'Gift Cards',
        'Terms of Use',
        'Impressum'
    ]

    return (
        <div className={styles.box}>
            <ul className={styles.linkList}>
            {links.map(link => {
                return <li className={styles.link}><a href="/">{link}</a></li>
            })}
            </ul>
           
        </div>
    )
}

export default FooterLinks
