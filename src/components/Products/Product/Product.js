import React, { useContext } from 'react'
import classes from './Product.module.css';
import { CartContext } from "../../../context/cart";

const Product = ({ productData }) => {
	const { addProductToCart } = useContext(CartContext);

	return (
		<div className={classes.productCard}>

			<p className={classes.badge}>HOT</p>
			<img src={productData.image} alt="the product" />
			<p className={classes.category}>{productData.category}</p>
			<p className={classes.name}>{productData.name}</p>

			<div className={classes.bottom}>
				<p className={classes.price}>${productData.price}</p>
				<button type="button" onClick={() => addProductToCart(productData)}>Add to cart<i className="bi bi-cart-plus"></i></button>
			</div>
		</div>
	);
}

export default Product;
