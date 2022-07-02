import React from "react"
import { LoginStyled } from "./style"

function Login() {
	return (
		<LoginStyled>
			<form>
				<div>
					<label>Email</label>
					<input type="text" />
				</div>
				<div>
					<label>Senha</label>
					<input type="password" />
				</div>
				<button>Fazer Login</button>
			</form>
		</LoginStyled>
	)
}

export default Login
