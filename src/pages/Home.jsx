import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";

const Home = () => {
	return (
		<div className="h-full w-full px-[10%] py-10 flex justify-evenly ">
			<div className="">
				<h1 className="text-3xl font-bold">Desserts</h1>
				<Products />
			</div>

			<Cart />
		</div>
	);
};

export default Home;
