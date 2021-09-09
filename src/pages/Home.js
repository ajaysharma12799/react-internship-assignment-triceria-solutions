import React, {useContext} from 'react'
import { FoodContext } from '../context/FoodContext';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';


const Home = () => {
    const context = useContext(FoodContext);
    const {cartItem, setCartItem} = useContext(CartContext);
    
    const addItemInCart = (item) => {
        const isAlreadyAdded = cartItem.findIndex(function(array) {
            return array.id === item.id;
        })
        if(isAlreadyAdded !== -1) {
            toast.error("Product Already Exists in Your Cart");
        }
        else {
            console.log(isAlreadyAdded + " isAlreadyAdded")
            console.log(item.id + " item id")
            setCartItem([...cartItem, item]);
            toast.success("Product Added To Cart");
        }
    }

    return (
        <div className="home-card-container">
            {
                context.map((product, idx) => (
                    <div key={idx}>
                        <div className="card">
                            <img src={product.img} className="card-img-top card-image" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title lead">{product.name}</h5>
                                <h5 className="card-title fw-bold">Price : {product.price} $</h5>
                                <div className="d-flex justify-content-between">
                                    <div className="badge rounded-pill bg-dark fw-light">{product.rating} <i className="bi bi-star"></i> </div>
                                    <div className="badge rounded-pill bg-secondary">{product.portion} g</div>
                                </div>
                                <button onClick={() => addItemInCart(product) } className="mt-3 btn btn-primary w-100 add-to-cart">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
