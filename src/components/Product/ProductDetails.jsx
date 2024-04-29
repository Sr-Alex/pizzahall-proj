import { Text, View } from "react-native";
import productStyles from "./productStyles";

export default function ProductDetails({ product = {}, selected = {} }) {
	return (
		<View>
			<Text style={productStyles.productTitle}>
				{product["name"] ? product["name"] : "Sem produto"}
			</Text>
			<Text style={[productStyles.productCurrency]}>R$</Text>
			<Text style={productStyles.productPrice}>
				{selected["price"]
					? selected["price"].toFixed(2)
					: product["preços"]
					? Object.values(product["preços"])[0].toFixed(2)
					: ""}
			</Text>
		</View>
	);
}
