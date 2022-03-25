import React from 'react';
import styles from './Footer.module.css';
import SocialLinks from '../SocialLinks';
import FooterLinks from '../FooterLinks';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <footer>
                <SocialLinks />
                <FooterLinks />
            </footer>
        </div>
    )
}

export default Footer
