import React from 'react';

function ProductList({ selectedFilter, products }) {
    // Filter products based on selected filter
    const filteredProducts = selectedFilter ? products.filter(product => product.type === selectedFilter) : products;

    return (
        <div className="product-list">
            <h2>Filtered Products</h2>
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>{product.name} - {product.type}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
