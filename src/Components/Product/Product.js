import React from 'react';
import './Product.css';
import GradeIcon from '@material-ui/icons/Grade';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from '../../Context/context';


function Product({ id, title, price, rating, img }) {
    const [{ basket, total }, dispatch] = useStateValue();
    console.log("this is my basket", basket);
    console.log(total)
    const addToBasket = () => {
        dispatch({
            type: 'ADD_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                img: img
            },
            total: price,
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__name">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(Number(rating)).fill().map((i) => (
                        <GradeIcon className="product__star" />
                    ))}

                </div>
            </div>

            <img className="product__image" src={img}></img>

            <button className="product__button" onClick={addToBasket}>
                <AddShoppingCartIcon />
            </button>

        </div>
    )
}

export default Product
