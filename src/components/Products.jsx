import React from "react";
import productsData from "../api/data.json";
const Products = () => {
	return (
		<ul className="flex flex-wrap items-center gap-5">
			{productsData.map((product) => (
				<li key={product.id} className="flex flex-col justify-between gap-10">
					<div className="flex flex-col items-center relative">
						<img
							src={product.image.desktop}
							alt={product.name}
							className="rounded-lg w-52 "
						/>

						<button className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm absolute bottom-[-10%]">
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
