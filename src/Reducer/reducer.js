import React from 'react';

export const initialState = {
    basket: [],
    total: 0,
    user: null
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                total: state.total + Number(action.total),
            };

        case 'REMOVE_PRODUCT':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            let newtotal = [state.total];
            if (index >= 0) {
                newBasket.splice(index, 1);
                newtotal = newtotal - Number(action.price);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                );
            }
            return {
                ...state,
                basket: newBasket,
                total: newtotal
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        default:
            return state;
    }
}

export default reducer;
