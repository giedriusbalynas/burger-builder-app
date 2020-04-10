import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import queryString from 'query-string';

class Checkout extends Component {
    state = {
        ingredients: {},
        totalPrice: 0
    };

    componentDidMount() {
        const query = queryString.parse(this.props.location.search, {parseNumbers: true});
        const ingredients = JSON.parse(query.ingredients);
        console.log(query.ingredients);
        this.setState({ingredients: ingredients, totalPrice: query.price});

        //Unfortunately i can't do this:
        // let ingredientsData = this.props.history.location.state.ingredients;
        // let CheckoutIngredients = {
        //     salad: ingredientsData.salad,
        //     meat: ingredientsData.meat,
        //     cheese: ingredientsData.cheese,
        //     bacon: ingredientsData.bacon
        // };
        // let checkoutPrice = this.props.location.state.totalPrice;
        // this.setState({ingredients: CheckoutIngredients, totalPrice: checkoutPrice})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
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
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (
                        <ContactData
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            {...props}
                        />)}
                />
            </div>
        )
    }
}

export default Checkout;