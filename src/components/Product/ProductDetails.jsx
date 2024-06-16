import { Text, View } from "react-native";
import productStyles from "./productStyles";
import { useEffect, useState } from "react";

export default function ProductDetails({ product = {}, selected = {} }) {
	const [productOptions, setProductOptions] = useState([]);

	useEffect(() => {
		if (product["opcoes"]) {
			setProductOptions(Array.from(product["opcoes"]));
		}
	}, [product]);
	return (
		<View>
			<Text style={productStyles.productTitle}>
				{product["nome"] ? product["nome"] : "Sem produto"}
			</Text>
			<Text style={[productStyles.productCurrency]}>R$</Text>
			<Text style={productStyles.productPrice}>
				{selected["price"]
					? selected["price"].toFixed(2)
					: productOptions.length
					? productOptions[0]["preco"].toFixed(2)
					: ""}
			</Text>
		</View>
	);
}
