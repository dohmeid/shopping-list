import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={classes.navbar}>

            <div className={classes.logo}>
                <a href="./">LOGO</a>
            </div>

            <nav>
                <ul>
                    <li><a href="#" className={classes.active}>Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
