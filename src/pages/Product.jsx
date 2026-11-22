import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";
import "./Product.css";

const FetchProducts = async () => {
    // FakeStore API jo products, images, price aur rating deti hai
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Failed to Fetch");
    return response.json();
}

const ProductsList = () => {
    const [inputValue, setInputValue] = useState("");

    const { data: products, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: FetchProducts
    });

    if (isLoading) return <h1 id="product-loading">Loading......</h1>;
    if (isError) return <h1 id="product-error">{error.message}</h1>;

    const filteredProducts = products ? products.filter((v) => {
       return v.title.toLowerCase().includes(inputValue.toLowerCase());
    }) : [];

    return (
        <div id="product-page" className="product-container">
            <div className="product-header-section">
                <h2 id="product-heading">Products List</h2>
                <input 
                    type="text" 
                    placeholder="Search product..." 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="product-search-input"
                />
            </div>
            
            <div id="product-grid" className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((v, i) => {
                        return (
                            <div key={v.id || i} id={`product-card-${i}`} className="product-card">
                                <div className="product-img-wrapper">
                                    <img src={v.image} alt={v.title} className="product-img" />
                                </div>
                                <div className="product-content">
                                    <h3 className="product-title">{v.title}</h3>
                                    <p className="product-price">${v.price}</p>
                                    <p className="product-rating">⭐ {v.rating?.rate} ({v.rating?.count} reviews)</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h3 className="no-products">No product found</h3>
                )}
            </div>

            {/* Bottom Right Sticky Back Home Button */}
            <NavLink to="/" id="back-home-btn" className="sticky-home-btn">
                Back Home
            </NavLink>
        </div>
    );
}

export default ProductsList;