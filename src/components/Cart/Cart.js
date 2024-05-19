import React, { useState } from 'react';
import classes from './Cart.module.css'; // Create an App.css file for your styles

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Cotton T-shirt', price: 44.00, quantity: 1 },
    { id: 2, name: 'Cotton T-shirt', price: 44.00, quantity: 1 },
    { id: 3, name: 'Cotton T-shirt', price: 44.00, quantity: 1 },
  ]);

  const [shipping, setShipping] = useState(5.00);
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, delta) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const applyDiscount = () => {
    // Example: Apply a discount if the code is "SAVE10"
    if (discountCode === 'SAVE10') {
      setDiscount(10); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  const totalItemsPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalPrice = totalItemsPrice + shipping - (totalItemsPrice * discount / 100);

  return (
    <div className={classes.shoppingCart}>
      <div className={classes.cartItems}>
        <h2>Shopping Cart</h2>
        {cartItems.map(item => (
          <div key={item.id} className="cartItem">
            <img src={`path/to/image/${item.id}.jpg`} alt={item.name} className={classes.itemImage} />
            <div>
              <h3>{item.name}</h3>
              <p>€ {item.price.toFixed(2)}</p>
            </div>
            <div className={classes.quantityControl}>
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <input type="text" value={item.quantity} readOnly />
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
        <a href="/">Back to shop</a>
      </div>

      <div className={classes.cartSummary}>
        <h2>Summary</h2>
        <p>ITEMS {cartItems.length}</p>
        <p>€ {totalItemsPrice.toFixed(2)}</p>
        <div>
          <label>SHIPPING</label>
          <select value={shipping} onChange={(e) => setShipping(parseFloat(e.target.value))}>
            <option value={5.00}>Standard-Delivery- €5.00</option>
            <option value={10.00}>Express-Delivery- €10.00</option>
          </select>
        </div>
        <div>
          <label>GIVE CODE</label>
          <input type="text" value={discountCode} onChange={handleDiscountChange} />
          <button onClick={applyDiscount}>Apply</button>
        </div>
        <h3>TOTAL PRICE</h3>
        <p>€ {totalPrice.toFixed(2)}</p>
        <button>REGISTER</button>
      </div>
    </div>
  );
};

export default Cart;
