import styled from "styled-components"

export const LoginStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 300px;
	height: 250px;

	margin: 20px auto;
	padding: 10px;

	background-color: #e0ffff;
	border-radius: 5px;

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		gap: 10px;
	}

	div {
		width: 100%;
		display: inline-block;
		text-align: center;
	}

	label {
		color: #b22222;
	}

	input {
		width: 90%;
		padding: 5px 10px;
	}

	button {
		width: 60%;
		height: 40px;

		padding: 5px 10px;
		margin: 10px;

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

	@media (max-width: 768px) {
		width: 280px;
		margin: 40px auto;
	}
`
