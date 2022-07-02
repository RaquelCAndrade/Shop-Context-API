import { Toaster } from "react-hot-toast"
import Header from "./components/Header/Header"

import RoutesProvider from "./Routes/RoutesProvider"
import { GlobalStyle } from "./styles/global"

function App() {
	return (
		<>
			<Header />
			<RoutesProvider />
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerStyle={{}}
				toastOptions={{
					className: "",
					duration: 5000,
					style: {
						background: "#b22222",
						color: "#fff",
					},
					success: {
						duration: 3000,
						theme: {
							primary: "green",
							secondary: "red",
						},
					},
				}}
			/>
			<GlobalStyle />
		</>
	)
}

export default App
