import React from "react";
import classes from './Products.module.css';
import Product from "../Products/Product/Product";
import {PRODUCTS} from "../../data/productsList";


const Products = () => {

    //rendering the nav list
    const PRODUCTS_LIST = PRODUCTS.map((p) => (
        <Product key={p.id} name={p.name} price={p.price} image_link={p.image_link}
        description={p.description}
        product_type={p.product_type}
        category={p.category}
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
