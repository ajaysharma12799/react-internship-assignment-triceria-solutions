import React from 'react'
import { toast } from 'react-toastify';

const CartCard = ({singleItem, removeItemFromCart}) => {
    const {img, name, price, portion, rating} = singleItem;

    return (
        <div className="card cart-card mb-3">
            <img src={img} className="img-fluid" alt={name} />
            <div className="card-body">
                <h5 className="card-title lead cart-card-title">{name}</h5>
                <h5 className="card-title lead fw-bold">Price : {price} $</h5>
                <div className="d-flex justify-content-between">
                    <div className="badge rounded-pill bg-dark fw-light">{rating} <i className="bi bi-star"></i> </div>
                    <div className="badge rounded-pill bg-secondary">{portion} g</div>
                </div>
                <div className="mt-2 d-flex justify-content-between">
                      <button className="bi bi-dash btn btn-secondary w-25"></button>
                      <input className="form-control w-25" type="number" />
                      <button className="bi bi-plus btn btn-secondary w-25"></button>
                </div>
                <button onClick={() => { 
                    removeItemFromCart(singleItem);
                    toast.success("Product Removed From Cart");
                } } className="mt-3 btn btn-danger w-100 add-to-cart">Remove From Cart</button>
            </div>

        </div>
    )
}

export default CartCard;
