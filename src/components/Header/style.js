import styled from "styled-components"
import { styled as styledIcon } from "@mui/material/styles"
import { Badge } from "@mui/material"

export const HeaderStyled = styled.div`
	width: 100%;
	height: 70px;

	margin-bottom: 25px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #e0ffff;
	box-shadow: 0px 3px 3px 0px #b0e0e6;

	> div {
		width: 1000px;
		height: 70px;

		display: flex;
		align-items: center;
		justify-content: space-between;

		margin: 0 30px;

		h1 {
			color: #8b0000;
		}

		span {
			color: #b22222;
			font-size: 16px;
		}

		> div {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		@media (max-width: 900px) {
			width: 100%;
		}

		@media (max-width: 425px) {
			height: 75px;
			flex-direction: column;

			span {
				font-size: 14px;
			}
		}
	}
`
export const DivIcons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2px;

	margin-left: 15px;

	cursor: pointer;

	@media (max-width: 420px) {
		margin-left: 0;
		margin-right: 15px;
	}

	&:hover {
		background-color: rgba(0, 128, 128, 0.3);
		border-radius: 8px;
	}
`

export const StyledBadge = styledIcon(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: 4,
		top: -2,
		border: `1px solid ${theme.palette.background.paper}`,
		color: `${theme.palette.background.paper}`,
		padding: "0 3px",
	},
}))
