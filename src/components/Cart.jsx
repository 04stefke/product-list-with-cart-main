import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
	const {
		isEmpty,
		totalItems,
		items,
		removeItem,
	} = useCart();

	if (isEmpty)
		return (
			<div className="md:w-1/2 w-full bg-white h-fit p-6 flex flex-col  gap-5 rounded-lg">
				<h2 className="text-xl text-red font-bold">Your Cart(0)</h2>
				<img
					src="./assets/images/illustration-empty-cart.svg"
					alt="remove item svg"
					className="w-72 place-self-center"
				/>
				<p className="text-rose-500 place-self-center">
					Your added items will appear here
				</p>
			</div>
		);

	return (
		<div className="md:w-1/2 w-full bg-white h-fit p-6 flex flex-col gap-5 rounded-lg">
			<h2 className="text-xl text-red font-bold">Your Cart({totalItems})</h2>
			{items.map((item) => (
				<div key={item.id}>
					<div className="border-b py-4">
						<h3 className="">{item.name}</h3>
						<div className="flex justify-between items-center">
							<div className="flex items-center gap-5">
								<p className="text-red">{item.quantity}</p>
								<p className="text-rose-300">@ ${item.price.toFixed(2)}</p>
								<p className="text-rose-500">123</p>
							</div>
							<button
								className="border-2 border-rose-300 rounded-full p-1 hover:border-rose-500"
								onClick={() => removeItem(item.id)}
							>
								<img
									src="./assets/images/icon-remove-item.svg"
									alt="remove item svg"
									className=""
								/>
							</button>
						</div>
					</div>
				</div>
			))}
			<div className="flex items-center justify-between">
				<p>Order Total</p>
				<p className="font-bold text-2xl">$2,100</p>
			</div>
			<div className="flex items-center justify-center gap-5 bg-rose-100 py-4 px-4 rounded-lg">
				<img src="./assets/images/icon-carbon-neutral.svg" alt="" />
				<p>
					This is <span className="font-bold">carbon-neutral</span> delivery
				</p>
			</div>
			<button className="bg-red hover:bg-redDarker text-white  py-2 px-4 rounded-full w-full transition-all">
				Confirm Order
			</button>
		</div>
	);
};

export default Cart;
