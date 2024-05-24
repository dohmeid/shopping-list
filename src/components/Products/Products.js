import React from "react";
import classes from './Products.module.css';
import Product from "../Products/Product/Product";
import { PRODUCTS } from "../../data/productsList";

const Products = ({ cartItems, setCartItems }) => {

    //rendering the nav list
    const PRODUCTS_LIST = PRODUCTS.map((p) => (
        <Product key={p.id}
            productData={p}
            cartItems={cartItems} setCartItems={setCartItems}
        />
    ));

    return (
        <div className={classes.h}>
            <h2>Here are Our Products</h2>
            <ul>{PRODUCTS_LIST}</ul>
        </div>
    );
}

export default Products;
