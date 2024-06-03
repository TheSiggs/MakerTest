import React, {useEffect, useState} from 'react';
import './App.css';
import {logDOM} from "@testing-library/react";
import {Product} from "./components/Product";
import {CartItem} from "./components/CartItem";

function App() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [inventory, setInventory] = useState([])
    const [priceRules, setPriceRules] = useState([])

    useEffect(() => {
        fetch('http://localhost/src/ajax/products/fetch.php')
            .then(r => r.json())
            .then(r => setInventory(r))
            .catch(e => console.log(e));
    }, [setInventory]);

    useEffect(() => {
        fetch('http://localhost/src/ajax/salesRules/fetch.php')
            .then(r => r.json())
            .then(r => setPriceRules(r))
            .catch(e => console.log(e));
    }, [setPriceRules]);

    useEffect(() => {
        const total = calculateTotal(cart);
        setTotal(total);

        const freebies = priceRules.filter(rule => rule.type === "freebie" && total > rule.minimum_order_value)
        for (const freebie of freebies) {
            const freeProduct = inventory.find(product => product.sku === freebie.freebie_sku);

            if (!cart.some(cartProduct => cartProduct.sku === freebie.sku && cartProduct.tag === 'free')) {
                setCart(prevCart => [...prevCart, {...freeProduct, quantity: 1, price: 0, tag: 'free'}]);
            }
        }
    }, [cart]);


    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.sku === item.sku && cartItem.tag !== 'free');
            switch (item.type) {
                case 'limit':
                    if ((existingItem?.quantity ?? 0) >= item.limit_value) {
                        return prevCart;
                    }
                    break;
                case 'bulk':
                    if ((existingItem?.quantity ?? 0) >= parseInt(item.bulk_quantity)) {
                        existingItem.price = item.bulk_price
                    }
                    break;
            }
            if (existingItem) {
                return prevCart.map(cartItem => {
                        if (cartItem.sku === item.sku && cartItem.tag !== 'free') {
                            return {...cartItem, quantity: cartItem.quantity + 1};
                        } else {
                            return cartItem
                        }
                    }
                );
            } else {
                return [...prevCart, {...item, quantity: 1}];
            }
        });
    };

    const calculateTotal = (cart) => {
        let total = 0;

        cart.forEach(item => {
            if (item.type === 'discount') {
                const freeBottles = Math.floor(item.quantity / item.limit_value);
                total += item.price * (item.quantity - freeBottles);
            } else {
                total += item.price * item.quantity;
            }
        });

        return total;
    };

    return (
        <div className="App">
            <h1>Kilkimi Whiskies Online Store</h1>
            <div className="inventory">
                {inventory.map(item => (
                    <Product
                        key={item.id}
                        item={item}
                        onClick={() => addToCart(item)}
                    />
                ))}
            </div>
            <div className="container cart">
                <h2>Cart</h2>
                <div className="row border m-0 p-0 align-items-center">
                    <b className="col text-center">Product</b>
                    <b className="col text-center">Unit Price</b>
                    <b className="col text-center">Quantity</b>
                    <b className="col text-center">Total Price</b>
                </div>
                {cart.map((item, index) => (
                    <CartItem
                        key={index}
                        item={item}
                        qty={item.quantity}
                        currentPrice={item.price}
                    />
                ))}
                <h2 id="cart-total">Total: ${total.toFixed(2)}</h2>
            </div>
        </div>
    );
}

export default App;
