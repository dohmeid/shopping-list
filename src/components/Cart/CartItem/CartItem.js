import React, { useState } from 'react';
import classes from './CartItem.module.css';

const CartItem = ({ productData, handleRemoveItemClick, handleItemQuantityChange }) => {

    //handle quantity change
    //handleItemQuantityChange



    return (
        <div className={classes.item}>
            <img src={productData.image} alt="img" />
            <div className={classes.details}>
                <h3>{productData.name}</h3>
                <p>{productData.category}</p>
            </div>
            <input name="quantity" type="number" min="1" max="100"
                defaultValue={productData.quantity}
                onChange={e => handleItemQuantityChange(productData.id, Number(e.target.value))} />
            <p className={classes.price}>${productData.price}</p>
            <p className={classes.total}>${productData.price*productData.quantity}</p>
            <button type="button" onClick={() => handleRemoveItemClick(productData.id)}>Delete<i className="bi bi-trash3"></i></button>
        </div>
    );
};

export default CartItem;
