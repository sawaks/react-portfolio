import React from 'react'
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <h3>Sawako Goshima</h3>
            </div>
            <nav>
                <Navigation />
            </nav>

        </header>
    );
};

export default Header