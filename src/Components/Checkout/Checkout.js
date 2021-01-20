import React from 'react'
import { useStateValue } from '../../Context/context';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user, total }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Credit-Card-Bill_1500x300_Offerpage.jpg" alt=""></img>

                <div>
                    <h3>Hello, <strong><em>{user ? user.email : 'Geek!'}</em></strong></h3>
                    <h3 className="checkout__title">Your Shopping Basket</h3>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}
export default Checkout;
