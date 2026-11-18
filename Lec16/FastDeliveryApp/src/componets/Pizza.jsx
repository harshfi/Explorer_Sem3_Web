
import Card from "./Card";
import { products } from '../data/product'

export default function Pizza() {
    const product = products.filter((i) => i.category == "pizza")

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