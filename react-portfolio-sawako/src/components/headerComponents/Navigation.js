import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to='/react-portfolio/'>About Me</Link>
            </li>
            <li>
                <Link to='/react-portfolio/portfolio'>Portfolio</Link>
            </li>
            <li>
                <Link to='/react-portfolio/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/react-portfolio/resume'>Resume</Link>
            </li>
        </ul>
    )
}

export default Navigation