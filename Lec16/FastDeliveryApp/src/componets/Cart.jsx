
import { useContext } from "react";

import { CartContext } from '../context/cartContext'



export default function Cart() {

    // const navgiate = useNavigate();
    const { cart, setCart } = useContext(CartContext)

    console.log(cart)
    return (
        <div className="cart-container">

            {
                cart.length === 0 ? <h1>Cart is Empty</h1> : (
                    cart.map((product) => {
                        <div className="cart-item">
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                        </div>
                    })
                )
            }

        </div>
    )
}