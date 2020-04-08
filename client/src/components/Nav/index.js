import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Google Books Favorites
          </a>
          <ul>
              <li> <Link to="/" alt="Home">Search</Link></li>
              <li> <Link to="/saved" alt="Saved Books">Saved</Link></li>
          </ul>
        </nav>
    );
}

export default Nav;