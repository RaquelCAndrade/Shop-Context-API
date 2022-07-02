import styled from "styled-components"

export const ProductListStyled = styled.div`
	max-width: 1000px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	margin: 0 auto;

	> div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;

		width: 300px;
		height: 400px;

		margin: 15px;
		padding: 10px 15px;

		background-color: #f5f5f5;
		border-radius: 5px;

		border: 1px solid #b22222;
	}

	h3 {
		font-size: 20px;
		color: #800000;
		margin: 15px 5px;
	}

	span {
		margin: 0px 5px;
		font-weight: 600;
		font-size: 20px;
	}

	button {
		width: 95%;
		height: 40px;

		margin: 5px;

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
`

export const DivImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 200px;

	img {
		width: 295px;
		height: 200px;
		padding-bottom: 2px;

		border-bottom: 3px solid #008080;

		overflow: hidden;
	}
`
