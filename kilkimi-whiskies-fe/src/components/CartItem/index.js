import React from 'react';
import './cartItem.css';


export const CartItem = ({key, item, qty}) => {
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
    let total = 0;
    if (type === 'discount') {
        const freeBottles = Math.floor(item.quantity / limit_value);
        total += price * (item.quantity - freeBottles);
    } else {
        total += price * item.quantity;
    }

    return (
        <div key={key} className="row align-items-center border-bottom">
            <h5 className="col text-start ms-3">{name}</h5>
            <p className="col text-center">${price}</p>
            <p className="col text-center">{qty}</p>
            <p className="col text-center">${(total).toFixed(2)}</p>
        </div>
    );
}