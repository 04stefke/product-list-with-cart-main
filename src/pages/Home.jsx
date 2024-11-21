import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";

const Home = () => {
	return (
		<div>
			<h1>Desserts</h1>
			<Products />
			<Cart />
		</div>
	);
};

export default Home;
