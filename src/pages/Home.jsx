import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";

const Home = () => {
	return (
		<div className="h-full w-full px-[10%] py-10 flex md:flex-row flex-col items-center md:items-start ">
			<div className="flex flex-col gap-5 w-full">
				<h1 className="text-3xl font-bold text-center md:text-start">Desserts</h1>
				<Products />
			</div>

			<Cart />
		</div>
	);
};

export default Home;
