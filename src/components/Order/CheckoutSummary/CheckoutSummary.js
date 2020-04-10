import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'
import styles from './CheckoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <h1>{props.price}</h1>
            <Button btnType='Danger' clicked={props.checkoutCancelled}>Cancel</Button>
            <Button btnType='Success' clicked={props.checkoutContinue}>Continue</Button>
        </div>

    )
};

export default checkoutSummary;