import React, {useState} from 'react'
import { toast } from 'react-toastify';

const CartCard = ({singleItem, removeItemFromCart}) => {
    const [stock, setStock] = useState(1);
    const {img, name, price, portion, rating} = singleItem;

    const incrementStock = () => {
        if(stock === 10) {
            toast.error("You Have Added Max Quantity");
        }
        else {
            setStock(stock + 1);
        }
    }
    const decrementStock = () => {
        if(stock <= 1) {
            removeItemFromCart(singleItem);
            toast.error("Product Removed From Cart");
        }
        else {
            setStock(stock - 1);
        }
    }

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
                      <button onClick={() => {
                          decrementStock()
                      }} className="bi bi-dash btn btn-secondary w-25"></button>
                      <input className="form-control w-25" type="number" value={stock} onChange={e => setStock(e.target.value)} />
                      <button onClick={() => {
                          incrementStock()
                      }} className="bi bi-plus btn btn-secondary w-25"></button>
                </div>
                <button onClick={() => { 
                    removeItemFromCart(singleItem);
                    toast.success("Product Removed From Cart");
                } } className="mt-3 btn btn-danger w-100 remove-from-cart">Remove From Cart</button>
            </div>

        </div>
    )
}

export default CartCard;
