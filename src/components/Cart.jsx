import React from "react";

const Cart = () => {
	return (
		<div className="w-full bg-white h-fit p-6 flex flex-col gap-5 rounded-lg">
			<h2 className="text-xl text-red font-bold">Your Cart(7)</h2>
			<div className="border-b py-4">
				<h3 className="">Item title</h3>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-5">
						<p className="text-red">3x</p>
						<p className="text-rose-300">@ $300</p>
						<p className="text-rose-500">123</p>
					</div>
					<button className="border-2 border-rose-300 rounded-full p-1 hover:border-rose-500">
						<img
							src="./assets/images/icon-remove-item.svg"
							alt="remove item svg"
							className=""
						/>
					</button>
				</div>
			</div>

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
