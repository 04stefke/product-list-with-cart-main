import React from "react";
import productsData from "../api/data.json";
import { useCart } from "react-use-cart";
const Products = () => {
	const { addItem } = useCart();
	return (
		<ul className="flex flex-wrap items-center justify-center md:justify-start gap-5 w-full">
			{productsData.map((product) => (
				<li key={product.id} className="flex flex-col justify-between gap-10" onClick={() => addItem(product)}>
					<div className="flex flex-col items-center relative">
						<img
							src={product.image.desktop}
							alt={product.name}
							className="rounded-lg w-64 "
						/>

						<button className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm absolute bottom-[-10%] hover:text-red hover:border-red border transition-all">
							<img src="./assets/images/icon-add-to-cart.svg" />
							Add to Cart
						</button>
					</div>
					<div className="flex flex-col">
						<p className="text-sm text-rose-300">{product.category}</p>
						<h2 className="font-bold text-lg">{product.name}</h2>
						<p className="text-red">${product.price.toFixed(2)}</p>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Products;
