
import Card from "./Card";
import { products } from '../data/product'

export default function Sandwich() {
    const product = products.filter((i) => i.category == "sandwich")

    return (
        <div className="products-grid">
            {
                product.map((prod) => {
                    return (
                        <Card
                            key={prod.id}

                            detail={prod}

                        />
                    )
                })
            }
        </div>
    )
}