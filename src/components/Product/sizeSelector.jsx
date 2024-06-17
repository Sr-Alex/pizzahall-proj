import { Text, TouchableOpacity, View } from "react-native";

import productStyles from "./productStyles";
import globalStyles from "../../globalStyles";

export default function SizeSelector({ product = {}, select = {}, setSelect }) {
	const selectSize = (opcao) => {
		if (!select || select["size"] == opcao["tamanho"]) return;

		setSelect({
			...select,
			id: product.id,
			name: product.nome,
			price: opcao["preco"],
			size: opcao["tamanho"],
		});
	};

	return (
		<View>
			<Text style={productStyles.SizeSelectorLabel}>Tamanhos</Text>
			<View style={productStyles.SizeSelector}>
				{product["opcoes"] &&
					Array.from(product["opcoes"]).map((opcao, index) => (
						<TouchableOpacity
							onPress={() => selectSize(opcao)}
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
