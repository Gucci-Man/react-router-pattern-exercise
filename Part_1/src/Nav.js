import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
    const links = dogs.map(dog => (
        <Link 
            key={dog.name}
            to={`/dogs/${dog.name.toLowerCase()}`}
        >
            {dog.name}
        </Link>

    ))
    return (
        <nav className='Nav'>
            <Link to="/dogs">
                Home
            </Link>
            {links}
        </nav>
    );
}

export default Nav;