import React, {useEffect, useState} from 'react';
import './App.css';
import {logDOM} from "@testing-library/react";
import {Product} from "./components/product";
import {CartItem} from "./components/CartItem";

function App() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/src/ajax/products/fetch.php')
            .then(r => r.json())
            .then(r => setInventory(r))
            .catch(e => console.log(e));
    }, [setInventory]);

    const addToCart = (item) => {
        console.log(item)
        setCart([...cart, item]);
        calculateTotal([...cart, item]);
    };

    const calculateTotal = (cart) => {
        let total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setTotal(total);
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
            <div className="cart">
                <h2>Cart</h2>
                {cart.map((item, index) => (
                    <CartItem
                        key={index}
                        item={item}
                    />
                ))}
                <h2>Total: ${total.toFixed(2)}</h2>
            </div>
        </div>
    );
}

export default App;
