import React from 'react';
import { Link } from 'react-router';

const Header = () => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <Link className='navbar-brand' to="/">Redux Ecommerce</Link>

            |

            <Link className='navbar-text' to="/cart">
                <span className="fa fa-lg fa-shopping-cart"></span>
            </Link>
             |
            <Link className='navbar-text' to="/add">
                <span className="fa fa-lg fa-plus-square"></span>
            </Link>
        </div>
    </nav>
);

export default Header;
