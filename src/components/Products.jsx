import React from "react";
import productsData from "../api/data.json";
import { useCart } from "react-use-cart";
const Products = () => {
	const { addItem, getItem, removeItem, items, updateItemQuantity } = useCart();

	return (
		<ul className="flex flex-wrap items-center justify-center md:justify-start gap-5 w-full">
			{productsData.map((product) => {
				const isInCart = items.find((item) => item.id === product.id);
				return (
					<li key={product.id} className="flex flex-col justify-between gap-10">
						<div className="flex flex-col items-center relative">
							<img
								src={product.image.desktop}
								alt={product.name}
								className="rounded-lg w-64 "
							/>
							<div className="flex items-center justify-center gap-2 absolute bottom-[-7%] w-full">
								{!isInCart && (
									<button
										onClick={() => addItem(product)}
										className="flex items-center justify-center gap-5 bg-white rounded-full w-3/4  px-4 py-2 text-sm hover:text-red hover:border-red border transition-all"
									>
										<img src="./assets/images/icon-add-to-cart.svg" />
										Add to Cart
									</button>
								)}

								{/* Increment and Decrement Buttons */}
								{isInCart && (
									<div className="flex items-center justify-between w-3/4 gap-2 bg-red rounded-full px-2 py-1 text-sm hover:border-white border-2 transition-all">
										<div
											className="border rounded-full p-2 cursor-pointer"
											onClick={() =>
												updateItemQuantity(product.id, isInCart.quantity - 1)
											}
										>
											<img src="./assets/images/icon-decrement-quantity.svg" />
										</div>
										<p className=" text-white">{isInCart.quantity}</p>
										<div
											className="border rounded-full p-2 cursor-pointer"
											onClick={() =>
												updateItemQuantity(product.id, isInCart.quantity + 1)
											}
										>
											<img src="./assets/images/icon-increment-quantity.svg" />
										</div>
									</div>
								)}
							</div>
						</div>
						<div className="flex flex-col">
							<p className="text-sm text-rose-300">{product.category}</p>
							<h2 className="font-bold text-lg">{product.name}</h2>
							<p className="text-red">${product.price.toFixed(2)}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default Products;
