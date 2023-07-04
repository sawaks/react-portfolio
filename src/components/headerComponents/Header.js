import React from 'react'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <h3><Link to='/'>Sawako Goshima</Link></h3>
            </div>
            <nav>
                <Navigation />
            </nav>

        </header>
    );
};

export default Header;