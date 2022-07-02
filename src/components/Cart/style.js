import styled from "styled-components"

export const CartStyled = styled.div`
	max-width: 1000px;
	max-height: 100vh;

	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	margin: 0 auto;

	@media (max-width: 900px) {
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

export const CartWrapper = styled.div`
	width: 650px;
	max-height: 85vh;
	margin: 20px;

	background-color: #e0ffff;
	border-radius: 5px;

	overflow-y: auto;
	overflow-x: hidden;

	@media (max-width: 800px) {
		width: 80%;
		overflow-x: hidden;
		margin: 0 auto;
	}

	h2 {
		width: 100%;
		margin: 20px 30px;
		color: #b22222;
	}

	.cart-container {
		display: flex;
		flex-direction: column;
		width: 620px;
		min-height: 200px;

		margin: 10px;
		padding: 5px;
		border-radius: 5px;
	}

	@media (max-width: 800px) {
		.cart-container {
			width: 100%;
			flex-direction: row;
			margin: 10px;
			overflow-x: auto;
		}
	}

	@media (max-width: 425px) {
		margin-top: 35px;

		.cart-container {
			margin: 5px;
		}
	}
`
export const CartCard = styled.div`
	width: 600px;
	height: 200px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: #f5f5f5;
	border-radius: 5px;

	border: 1px solid #b22222;

	margin: 10px;
	padding: 15px;

	img {
		border-radius: 5px;
		width: 150px;
		height: 150px;
	}

	h3 {
		max-width: 150px;
		text-align: center;
		font-size: 20px;
		color: #800000;
	}

	span {
		margin: 0px 5px;
		font-weight: 600;
		font-size: 20px;
	}

	.div-delete {
		cursor: pointer;
	}

	@media (max-width: 800px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;

		min-width: 250px;
		max-width: 270px;
		height: 300px;

		margin: 10px;

		img {
			width: 100px;
			height: 100px;
		}
	}

	@media (max-width: 425px) {
		margin-left: 0px;
	}
`
export const EmptyCart = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	margin: 60px 30px 0 30px;

	span {
		color: #b22222;
		margin-bottom: 15px;
	}

	button {
		width: 100%;
		height: 40px;

		padding: 5px 10px;

		border-radius: 8px;
		border: 1px solid #b22222;
		background-color: #b22222;

		font-size: 16px;
		color: #f5f5f5;

		&:hover {
			color: #b22222;
			background-color: rgba(0, 128, 128, 0.3);
		}
	}

	@media (max-width: 800px) {
		width: 100%;
		margin: 30px 15px;
	}
`

export const CartResume = styled.div`
	width: 250px;
	height: 200px;

	margin: 22px;

	border-radius: 5px;

	background-color: #e0ffff;

	h3 {
		text-align: center;
		margin: 15px;
		color: #b22222;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin: 25px;
	}

	p {
		color: #8b0000;
		font-weight: 600;
	}

	span {
		color: #2f4f4f;
		font-weight: bold;
	}
`
