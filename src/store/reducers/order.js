import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false
};

const reducer = (state = initialState, action) => {
    switch (actionTypes.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.order.data,
                id: action.order.orderId
            };
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};