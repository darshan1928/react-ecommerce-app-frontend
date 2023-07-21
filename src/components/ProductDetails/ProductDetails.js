import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { getProductId } from "../../ApiService/Api";
function ProductDetails() {
    const { id } = useParams();
    const [ProductDetails, setProductDetails] = useState({});
    const fetchProductDetails = async () => {
        const data = await getProductId(id);
        setProductDetails(data);
    };
    console.log(ProductDetails);

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    const handleClick=()=>{
        alert("Product Out of Stock")
    }

    return (
        <div className="product-details-container">
            <img src={ProductDetails.image} alt="" className="product-img" />
            <div className="product-info">
                <h2 className="product-title">{ProductDetails.title}</h2>
                <p className="product-description">{ProductDetails.description}</p>
                <p className="product-price">{ProductDetails.price} $</p>
                <button className="buy-now-btn" onClick={handleClick}>Buy now</button>
                <Link to="/">
                    {" "}
                    <button className="go-back-btn">Go back to Home</button>
                </Link>
            </div>
        </div>
    );
}

export default ProductDetails;
