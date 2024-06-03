import React from 'react';
import './product.css';

export const Product = ({key, item, onClick, currentPrice}) => {
    const {
        bulk_price,
        bulk_quantity,
        description,
        discount_value,
        freebie_sku,
        id,
        limit_value,
        minimum_order_value,
        name,
        price,
        sku,
        type
    } = item;
    return (
        <div key={key} className="item">
            <h2>{name}</h2>
            <p>${currentPrice}</p>
            <button onClick={() => onClick(item)}>Add to Cart</button>
        </div>
    );
}