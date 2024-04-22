import { Text, TouchableOpacity, View } from "react-native";

import productStyles from "./productStyles";

export default function SizeSelector({ product = {}, setSize }) {
	return (
		<View style={productStyles.SizeSelector}>
			{Array.from(product["tamanhos"]).map((size) => (
				<TouchableOpacity style={productStyles.sizeMark}>
					<Text style={productStyles.sizeMarkText}>{size}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}
