import React, {Fragment} from 'react';
import Button from '../../UI/Button/Button'

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });

    return (
        <Fragment>
            <h3>Your order</h3>
            <p>A burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)} &euro;</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
    )

};

export default orderSummary;