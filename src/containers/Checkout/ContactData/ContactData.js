import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Test Name',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '12345',
                    country: 'Lithuania'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            } )
            .catch(error => this.setState({loading: false}));
    };

    render() {
        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your name"/>
                <input className={styles.Input} type="email" name="email" placeholder="Your email"/>
                <input className={styles.Input} type="text" name="street" placeholder="Your street"/>
                <input className={styles.Input} type="text" name="postal" placeholder="Your postal code"/>
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }

        return (
            <div className={styles.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
