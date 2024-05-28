import React, { useContext } from 'react';
import classes from './Cart.module.css';
import CartItem from "./CartItem/CartItem";
import { CartContext } from '../../context/cart';

const Cart = () => {
  const { cartItems,getTotalPrice, getTotalQuantity } = useContext(CartContext);

  //rendering the cart items list
  const CART_LIST = cartItems.map((p) => (
    <CartItem key={p.id} productData={p} />
  ));

  return (
    <div className={classes.container}>
      <h2>Shopping Cart</h2>
      <ul>{CART_LIST}</ul>
      <div className={classes.info}>
        <p>{getTotalQuantity()} items</p>
        <p>Grand Total = ${getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default Cart;
