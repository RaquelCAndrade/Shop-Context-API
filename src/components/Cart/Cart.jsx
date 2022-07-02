import React, { useContext } from "react"
import { Link } from "react-router-dom"

import DeleteIcon from "@mui/icons-material/Delete"
import {
	CartCard,
	CartResume,
	CartStyled,
	CartWrapper,
	EmptyCart,
} from "./style"
import { CartContext } from "../../Providers/CartContext"

const Cart = () => {
	const { cartItens, removeFromCart } = useContext(CartContext)

	return (
		<CartStyled>
			<CartWrapper>
				<h2>Itens do carrinho</h2>

				<div className="cart-container">
					{cartItens.length === 0 ? (
						<EmptyCart>
							<span>
								Você ainda não possui produtos adiconados
							</span>
							<Link to="/">
								<button>Voltar para pagina inicial</button>
							</Link>
						</EmptyCart>
					) : (
						cartItens.map((product, index) => (
							<CartCard key={index}>
								<div>
									<img
										src={product.image}
										alt={product.name}
									/>
								</div>
								<h3>{product.name}</h3>
								<span>
									{product.price.toLocaleString("pt-BR", {
										style: "currency",
										currency: "BRL",
									})}
								</span>
								<div className="div-delete">
									<DeleteIcon
										style={{ color: "darkred" }}
										onClick={() => removeFromCart(product)}
									></DeleteIcon>
								</div>
							</CartCard>
						))
					)}
				</div>
			</CartWrapper>

			<CartResume>
				<h3>Resumo Pedido</h3>
				<div>
					<p>Total:</p>
					<span>
						{cartItens
							.reduce((acc, item) => acc + item.price, 0)
							.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
					</span>
				</div>
				<div>
					<p>Quantidade:</p>
					<span>{cartItens.length}</span>
				</div>
			</CartResume>
		</CartStyled>
	)
}

export default Cart
