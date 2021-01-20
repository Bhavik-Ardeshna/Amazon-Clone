import React from 'react'
import './CheckoutProduct.css'
import GradeIcon from '@material-ui/icons/Grade';
import { useStateValue } from '../../Context/context';


function CheckoutProduct({ id, title, price, rating, img }) {
    const [{ basket, total }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            id: id,
            price: price
        })
    };

    return (
        <div className="checkoutProduct">
            <img src={img} className="checkoutProduct__img"></img>
            <div className="checkoutProduct__data">
                <div className="checkoutProduct__info">
                    <div className="checkoutProduct__title">
                        {title}
                    </div>
                    <div className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </div>
                    <div className="checkoutProduct__rating">
                        {Array(Number(rating)).fill().map((i) => (
                            <GradeIcon className="product__star" />
                        ))}
                    </div>
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>

        </div>

    )
}

export default CheckoutProduct
