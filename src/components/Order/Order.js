import React from 'react';
import styles from './Order.css';

const order = props => (
    <div className={styles.Order}>
        <p>Ingredients: Salad (1)</p>
        <p>Price: <strong>5.55</strong></p>
    </div>
);

export default order;