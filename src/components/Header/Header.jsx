import React, { useContext } from "react"
import { Link } from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LoginIcon from "@mui/icons-material/Login"

import { DivIcons, HeaderStyled, StyledBadge } from "./style"
import { CartContext } from "../../Providers/CartContext"

function Header() {
	const { cartItens } = useContext(CartContext)

	return (
		<HeaderStyled>
			<div>
				<Link to="/">
					<h1>Kenzie Shop</h1>
				</Link>

				<div>
					<Link to="/cart">
						<DivIcons>
							<StyledBadge
								badgeContent={cartItens.length}
								color="error"
							>
								<ShoppingCartIcon
									style={{ color: "darkred" }}
								/>
							</StyledBadge>
							<span>Carrinho</span>
						</DivIcons>
					</Link>

					<Link to="/login">
						<DivIcons>
							<LoginIcon style={{ color: "darkred" }} />
							<span>Entrar</span>
						</DivIcons>
					</Link>
				</div>
			</div>
		</HeaderStyled>
	)
}

export default Header
