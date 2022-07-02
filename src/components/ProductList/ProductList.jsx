import React, { useContext } from "react"
import { CartContext } from "../../Providers/CartContext"
import { ProductsContext } from "../../Providers/ProductsContext"

import { DivImage, ProductListStyled } from "./style"

const ProductsList = () => {
	const { products } = useContext(ProductsContext)
	const { addToCart } = useContext(CartContext)

	return (
		<ProductListStyled>
			{products.map((product, index) => (
				<div key={index}>
					<DivImage>
						<img src={product.image} alt={product.name} />
					</DivImage>

					<h3>{product.name}</h3>
					<span>
						{product.price.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
					</span>
					<div>
						<button onClick={() => addToCart(product)}>
							Adicionar ao carrinho
						</button>
					</div>
				</div>
			))}
		</ProductListStyled>
	)
}

export default ProductsList
