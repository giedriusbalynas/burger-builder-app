import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        },
        totalPrice: 0
    };

    componentDidMount() {
        let ingredientsData = this.props.history.location.state.ingredients;
        let CheckoutIngredients = {
            salad: ingredientsData.salad,
            meat: ingredientsData.meat,
            cheese: ingredientsData.cheese,
            bacon: ingredientsData.bacon
        };
        let checkoutPrice = this.props.location.state.totalPrice;
        this.setState({ingredients: CheckoutIngredients, totalPrice: checkoutPrice})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinueHandler = () => {
        console.log(this.props.history.location.state)


        // this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
            </div>
        )
    }
}

export default Checkout;