import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../Context/context';


function Subtotal() {
    const [{ basket, total }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                decimalScale={2}
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket?.length} items):<strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}

            />
            <button>Proceed to Checkout</button>
        </div>
    );
}


export default Subtotal;