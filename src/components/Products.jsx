import React from "react";
import productsData from "../api/data.json";
const Products = () => {
	return (
		<div>
			<ul>
				{productsData.map((product) => (
					<li key={product.id}>
						<img src={product.image.thumbnail} alt={product.name} />
						<h2>{product.name}</h2>
						<p>{product.description}</p>
						<button>Add to Cart</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Products;
