import { createContext } from "react"

export const ProductsContext = createContext([])

export const ProductsProvider = ({ children }) => {
	const products = [
		{
			name: "Casaco Vermelho Masculino",
			price: 279.0,
			image: "https://images-submarino.b2w.io/produtos/4898346015/imagens/jaqueta-estilosa-masculino-blusa-frio-casaco-bobojaco-esquenta-roupa-inverno-puffer-forrada-pelo-poliester-qualidade/4898346015_1_large.jpg",
		},
		{
			name: "Casaco Amarelo",
			price: 179.0,
			image: "https://images-submarino.b2w.io/produtos/5018116440/imagens/jaqueta-casaco-bobojaco-blusa-feminino-frio-extremo-forrada-roupa-inverno-agasalho-poliester-alta-qualidade-resistente/5018116440_1_large.jpg",
		},
		{
			name: "Sobretudo Infantil",
			price: 99.0,
			image: "https://images-submarino.b2w.io/produtos/5071203358/imagens/casaco-tipo-sobretudo-preto-infantil-com-botoes-inverno-frio-cachecol-vermelho-super-luxo/5071203358_1_large.jpg",
		},
		{
			name: "Roupa pet com capuz",
			price: 199.0,
			image: "https://images-submarino.b2w.io/produtos/5010673276/imagens/roupa-pet-para-caes-capa-blusa-pet-capuz-pelucia-virtus-inverno-petisco/5010673276_1_large.jpg",
		},
		{
			name: "Jaqueta Bomber Feminina",
			price: 179.0,
			image: "https://images-submarino.b2w.io/produtos/2775749017/imagens/casaco-feminino-jaqueta-bomber-estampadas-moda-inverno/2775749017_1_large.jpg",
		},
		{
			name: "Moletom Feminino",
			price: 179.0,
			image: "https://images-submarino.b2w.io/produtos/1978263560/imagens/casaco-moletom-carter-s-agasalho-de-frio-inverno-menina-algodao-com-ziper-e-coracao-lantejoulas/1978263578_1_large.jpg",
		},
	]

	return (
		<ProductsContext.Provider value={{ products }}>
			{children}
		</ProductsContext.Provider>
	)
}
