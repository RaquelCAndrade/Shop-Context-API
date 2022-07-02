import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { CartProvider } from "./Providers/CartContext"
import { ProductsProvider } from "./Providers/ProductsContext"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<BrowserRouter>
		<ProductsProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ProductsProvider>
	</BrowserRouter>
)
