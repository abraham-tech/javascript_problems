import './App.css';
import {useEffect, useState} from 'react';

function App() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const PAGE = [...Array(products.length / 10 )];
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

    if(products.length <= 0){
        return (
            <p>No products to display</p>
        )
    }
    return (
        <>
        <div className="products">
            {products.slice(page * 10 - 10, page * 10).map((product, i) => {
                return (
                    <span className="products__single" key={i}>
                        <img src={product.thumbnail} alt="logo"/>
                        <b>{product.brand} </b>
                    </span>)
            })}
        </div>
            <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>⬅️</button>
                {PAGE.map((_, i) => {
                    return <span className={page === i + 1? "pagination__selected": ""} onClick={() => setPage(i + 1)}> {i + 1}  </span>
                }
        )}
                <button disabled={PAGE.length === page} onClick={() => setPage(page + 1)}>➡️</button>
            </div>
        </>
    );
}

export default App;
