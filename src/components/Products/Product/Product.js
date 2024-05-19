import React from "react";
import classes from './Product.module.css';

//the name, image, and price .
// "Add to Cart" button
const Product = (props) => {
	return (
		<div className={classes.productCard}>

			<p className={classes.badge}>HOT</p>
			<img src={props.image_link} alt="product image" />
			<p className={classes.category}>{props.category}{props.product_type}</p>
			<p className={classes.name}>{props.name}</p>
			
			<div className={classes.bottom}>
				<p className={classes.price}>${props.price}</p>
				<button type="button" href="">Add to cart<i className="bi bi-cart-plus"></i></button>
			</div>
		</div>


	);
}

export default Product;
