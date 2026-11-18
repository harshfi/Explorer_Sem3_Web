import '../style.css'

export default function Card({ detail }) {
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

                <button className="food-card__button" type="button">
                    Add to Cart
                </button>
            </div>
        </article>
    );
}