import React, { useState, useEffect } from 'react';
import classes from './Cart.module.css';
import CartItem from "./CartItem/CartItem";

const Cart = ({ cartItems, setCartItems }) => {

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //compute the total quantity of cart items
  useEffect(() => {
    let total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    console.log("the items q:")

    cartItems.forEach((score) => {
      console.log(score.quantity);
    });


    console.log("total quantity = " + total);
    setTotalQuantity(total);
  }, [cartItems]);

  //compute the total price
  useEffect(() => {
    const p = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log("total price" + p);
    setTotalPrice(p);
  }, [cartItems]);


  //change the qauntity of an item 
  const handleItemQuantityChange = (id, newQuantity) => {
    console.log("the new quantity =" + newQuantity);
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem
      ));
  };

  //delete an item from the cart
  const handleRemoveItemClick = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id)); // remove the item from the cart
  }

  //rendering the cart items list
  const CART_LIST = cartItems.map((p) => (
    <CartItem key={p.id} productData={p} handleRemoveItemClick={handleRemoveItemClick} handleItemQuantityChange={handleItemQuantityChange} />
  ));

  /*
  Next, let's use the useEffect hook to persist the cart state in the browser. Add the following code to the cart.jsx file:
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  
  */


  /*
  
  Let's also use the useEffect hook to get the cart items from the browser. Add the following code to the cart.jsx file:
  useEffect(() => {
      const cartItems = localStorage.getItem("cartItems");
      if (cartItems) {
      setCartItems(JSON.parse(cartItems));
      }
  }, []);
  */





  return (
    <div className={classes.container}>

      <h2>Shopping Cart</h2>

      <ul>{CART_LIST}</ul>

      <div className={classes.info}>
        <p>{totalQuantity} items</p>
        <p>Grand Total = ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
