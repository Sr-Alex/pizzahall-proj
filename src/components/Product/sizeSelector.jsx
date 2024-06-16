import { Text, TouchableOpacity, View } from "react-native";

import productStyles from "./productStyles";
import globalStyles from "../../globalStyles";

export default function SizeSelector({ product = {}, select = {}, setSelect }) {
	const selectSize = (size) => {
		if (!select || select["size"] == size) return;

		setSelect({
			...select,
			id: product.id,
			name: product.nome,
			price: product["preco"],
			size: size,
		});
	};

	return (
		<View>
			<Text style={productStyles.SizeSelectorLabel}>Tamanhos</Text>
			<View style={productStyles.SizeSelector}>
				{product["opcoes"] &&
					Array.from(product["opcoes"]).map((opcao, index) => (
						<TouchableOpacity
							onPress={() => selectSize(opcao["tamanho"])}
							key={index}
							style={[
								productStyles.sizeMarkButton,
								select["size"] == opcao["tamanho"]
									? {
											backgroundColor:
												globalStyles.colors.green,
									  }
									: {},
							]}>
							<Text style={productStyles.sizeMarkButtonText}>
								{opcao["tamanho"][0]}
							</Text>
						</TouchableOpacity>
					))}
			</View>
		</View>
	);
}
