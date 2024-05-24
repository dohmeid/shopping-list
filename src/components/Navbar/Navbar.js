import React from "react";
import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    const currentPage = useLocation().pathname;

    return (
        <header className={classes.navbar}>

            <div className={classes.logo}>
                <a href="">MakeUp Store</a>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/" className={currentPage === '/' ? classes.active : ''}>Products</Link >
                    </li>
                    <li>
                        <Link to="/cart" className={currentPage === '/cart' ? classes.active : ''}>Cart</Link >
                    </li>
                    <li>
                        <Link to="/checkout" className={currentPage === '/checkout' ? classes.active : ''}>Checkout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
