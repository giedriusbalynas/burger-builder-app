import React from 'react';
import burgerLogo from '../../assets/images/logo.png';
import styles from './Logo.css';

const logo = (props) => (
    <div
        className={styles.Logo}
        // style={{height: props.height}} (example for using in-line styles with props)
    >
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;