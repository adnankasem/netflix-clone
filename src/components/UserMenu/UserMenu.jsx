import React from 'react';
import styles from './UserMenu.module.css';
import userImage from './profile-image.png';


const UserMenu = () => {
    return (
        // <div className={styles.userMenu}>
            <div className={styles.user}>
                <img src={userImage} alt="" />
            </div>
        // </div>
    )
}

export default UserMenu
