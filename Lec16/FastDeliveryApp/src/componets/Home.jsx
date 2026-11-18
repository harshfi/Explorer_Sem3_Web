
import Card from "./Card";
import { products } from '../data/product'

export default function Home() {

    return (
        <div className="products-grid">
            {
                products.map((prod) => {
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