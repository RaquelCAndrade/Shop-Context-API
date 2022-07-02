import React from "react"
import ProductsList from "../../components/ProductList/ProductList"

import { MainStyled } from "./style"

function Home() {
	return (
		<MainStyled>
			<ProductsList />
		</MainStyled>
	)
}

export default Home
