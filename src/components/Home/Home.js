import React, { useEffect, useState } from "react";
import "./Home.css";
import { getAllProducts } from "../../ApiService/Api";
import { Link } from "react-router-dom";
function Home() {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const data = await getAllProducts();
        setProducts(data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return products ? (
        <div className="product-grid">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <img src={product.image} alt="product-image"/>
                    <h2>{product.title}</h2>
                    <p>
                        <span className="price">$ {product.price}</span>
                    </p>
            <Link to ={`/product/${product.id}`}>       <button className="product-button">Product Details</button>   </Link>
                </div>
            ))}
        </div>
    ) : (
        <div>"Loading"</div>
    );
}

export default Home;
