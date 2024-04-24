import { Text, View } from "react-native";
import productStyles from "./productStyles";

export default function ProductDetails({ product = {} }) {
	return (
		<View>
			<Text style={productStyles.productTitle}>
				{product["name"] ? product["name"] : "Sem produto"}
			</Text>
			<Text style={[productStyles.productCurrency]}>R$</Text>
			<Text style={productStyles.productPrice}>
				{product["preço"]
					? parseFloat(product["preço"]).toFixed(2)
					: "Sem preço"}
			</Text>
		</View>
	);
}
