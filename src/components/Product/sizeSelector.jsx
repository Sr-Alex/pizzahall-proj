import { Text, TouchableOpacity, View } from "react-native";

import productStyles from "./productStyles";

export default function SizeSelector() {
	return (
		<View style={productStyles.SizeSelector}>
			<TouchableOpacity style={productStyles.sizeMark}>
				<Text style={productStyles.sizeMarkText}>P</Text>
			</TouchableOpacity>
			<TouchableOpacity style={productStyles.sizeMark}>
				<Text style={productStyles.sizeMarkText}>M</Text>
			</TouchableOpacity>
			<TouchableOpacity style={productStyles.sizeMark}>
				<Text style={productStyles.sizeMarkText}>G</Text>
			</TouchableOpacity>
		</View>
	);
}
