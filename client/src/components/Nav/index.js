import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Google Books Wishlist
          </a>
            <Link to="/" alt="Home" className="text-muted pr-2">Search</Link>
            <Link to="/saved" alt="Saved Books" className="text-muted">Saved</Link>
        </nav>
    );
}

export default Nav;