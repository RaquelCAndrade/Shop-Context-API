import React from "react"
import { Routes, Route } from "react-router-dom"

import CartPage from "../pages/CartPage/CartPage"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"

function RoutesProvider() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cart" element={<CartPage />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	)
}

export default RoutesProvider
