import React, { useState, useEffect } from 'react';
import './Shop.css';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';




const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://arafatruetbd.github.io/data/player.json")
            .then((res) => res.json())
            .then((players) => setProducts(players));
    }, [])

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Player
                        handleAddProduct={handleAddProduct}
                        product={pd}
                    ></Player>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;