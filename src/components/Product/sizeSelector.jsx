import { Text, TouchableOpacity, View } from "react-native";

import productStyles from "./productStyles";
import globalStyles from "../../globalStyles";

export default function SizeSelector({ product = {}, select = {}, setSelect }) {
	const selectSize = (size) => {
		if (!select || select["size"] == size) return;

		setSelect({
			...select,
			id: product.id,
			name: product.name,
			price: product["preços"][size],
			size: size,
		});
	};

	return (
		<View>
			<Text style={productStyles.SizeSelectorLabel}>Tamanhos</Text>
			<View style={productStyles.SizeSelector}>
				{product["preços"] &&
					Object.keys(product["preços"]).map((size, index) => (
						<TouchableOpacity
							onPress={() => selectSize(size)}
							key={index}
							style={[
								productStyles.sizeMark,
								select["size"] == size
									? {
											backgroundColor:
												globalStyles.colors.green,
									  }
									: {},
							]}>
							<Text style={productStyles.sizeMarkText}>
								{size}
							</Text>
						</TouchableOpacity>
					))}
			</View>
		</View>
	);
}
