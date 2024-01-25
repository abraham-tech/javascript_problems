import './App.css';
import {useEffect, useState} from 'react';

function App() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=100');
            const data = await response.json();
            if (data && data.products) {
                setProducts(data.products);

            }
            ;

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div>
            {products.length > 0 && (
                <div className="products">
                    {products.map((product, i) => {
                        return (
                            <span className="products__single" key={i}>
                                <img src={product.thumbnail} alt="logo"/>

                                    <b>{product.brand} </b>

                            </span>)
                    })}
                </div>
            )}

        </div>
    );
}

export default App;
