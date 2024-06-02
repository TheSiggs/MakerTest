import React from 'react';
import './cartItem.css';


export const CartItem = ({key, item}) => {
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
        type,
    } = item;
    return (
        <div key={key} className="item">
            <h3>{name}</h3>
            <p>${price}</p>
        </div>
    );
}