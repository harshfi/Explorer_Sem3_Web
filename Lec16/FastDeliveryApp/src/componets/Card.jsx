import '../style.css'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export default function Card({ detail }) {

    const { cart, setCart } = useContext(CartContext)

    function addCart(product) {

        const newCart = [...cart, product];
        setCart(newCart);
        console.log("product has been added")
        console.log(cart)
    }



    return (
        <article className="food-card">
            <img
                className="food-card__image"
                src={detail.img}
                alt={detail.name}
                loading="lazy"
            />

            <div className="food-card__body">
                <div className="food-card__header">
                    <h3>{detail.name}</h3>
                    <span className="food-card__price">₹{detail.price}</span>
                </div>

                <p>{detail.desc}</p>

                <button onClick={() => addCart(detail)} className="food-card__button" type="button">
                    Add to Cart
                </button>
            </div>
        </article>
    );
}