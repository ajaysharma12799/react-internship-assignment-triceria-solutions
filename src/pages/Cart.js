import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import CartCard from '../components/CartCard';

const Cart = () => {
    const {cartItem, setCartItem} = useContext(CartContext);
    const [disabled, setDisabled] = useState(true);
    
    const buyNow = () => {
        setCartItem([]);
        toast.success("Thanks For Purchasing, Keep Healthy and Stay Fit");
    }

    const removeItemFromCart = (item) => {
        setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
    }

    const calculateTotalAmount = () => {
        var sum = 0;
        cartItem.forEach(product => {
            const {price} = product;
            sum += price;
        });
        return sum;
    }
    
    useEffect(() => {
        cartItem.length > 0 ? setDisabled(false) : setDisabled(true);
    }, [disabled, cartItem]);

    return (
        <React.Fragment>
            <div className="container mt-3 mb-3">
                <div className="cart-heading">
                    <h5 className="fs-2 lead fw-light">Cart({cartItem.length} Items)</h5>
                </div>
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-7 cart-product-container">
                        {
                            cartItem.map((singleItem, idx) => (
                                <CartCard singleItem={singleItem} key={idx} removeItemFromCart={removeItemFromCart} />
                            ))
                        }
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 d-flex flex-column align-items-center">
                        <div className="card mb-3 w-100">
                            <div className="card-body">
                                <h5 className="mb-3">The Total Amount </h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products Amount
                                            <span>{calculateTotalAmount()} $</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>0.0 $</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>The Total Amount</strong>
                                                <strong> <p className="mb-0">(Including VAT) </p> </strong>
                                            </div>
                                            <span><strong>{calculateTotalAmount()} $</strong></span>
                                        </li>
                                    </ul>
                                <button type="button" disabled={disabled} onClick={buyNow} className="btn checkout-button w-100">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart
