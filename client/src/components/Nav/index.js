import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Google Books Wishlist
          </a>
            <Link to="/" alt="Home">Search</Link>
            <Link to="/saved" alt="Saved Books">Saved</Link>
        </nav>
    );
}

export default Nav;