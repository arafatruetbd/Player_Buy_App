import React from 'react';
import '../Header/Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Player Review</a>
            </nav>
        </div>
    );
};

export default Header;