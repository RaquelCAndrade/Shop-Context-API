import { createContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
	const [cartItens, setCartItens] = useState(
		JSON.parse(localStorage.getItem("@CART")) || []
	)

	useEffect(() => {
		localStorage.setItem("@CART", JSON.stringify(cartItens))
	}, [cartItens])

	const addToCart = (product) => {
		const selectProduct = cartItens.find((item) => {
			return item.name === product.name
		})
		if (selectProduct) {
			toast.error("Produto já adicionado ao carrinho")
		} else {
			setCartItens([...cartItens, product])

			toast.success("Produto adicionado ao carrinho")
		}
	}

	const removeFromCart = (product) => {
		const newCartItens = cartItens.filter(
			(item) => item.name !== product.name
		)

		setCartItens(newCartItens)
	}

	return (
		<CartContext.Provider value={{ cartItens, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	)
}
