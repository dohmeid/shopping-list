import React from "react";
import classes from './Product.module.css';


const Product = ({ productData, cartItems, setCartItems }) => {

	const handleAddProductClick = () => {
		//check if the item is already in the cart
		const isItemInCart = cartItems.find((cartItem) => cartItem.id === productData.id);

		// if the item is already in the cart, increase the quantity of the item
		if (isItemInCart) {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === productData.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
				));
		}
		else { // if the item is not in the cart, add the item to the cart
			setCartItems([...cartItems, { ...productData, quantity: 1 }]);
		}


		//console.log("adding the product to the cart is done");
		//console.log(cartItems);
	}


	return (
		<div className={classes.productCard}>

			<p className={classes.badge}>HOT</p>
			<img src={productData.image} alt="the product" />
			<p className={classes.category}>{productData.category}</p>
			<p className={classes.name}>{productData.name}</p>

			<div className={classes.bottom}>
				<p className={classes.price}>${productData.price}</p>
				<button type="button" onClick={handleAddProductClick}>Add to cart<i className="bi bi-cart-plus"></i></button>
			</div>
		</div>
	);
}

export default Product;
