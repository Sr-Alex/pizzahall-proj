import { useState } from "react";
import { Text, View } from "react-native";
import PagerView from "react-native-pager-view";

import productStyles from "./productStyles";

import ProductView from "./ProductView";
import SizeSelector from "./sizeSelector";

export default function ProductSelector({ products = [] }) {
	const [currentProduct, setCurrentProduct] = useState({});

	return (
		<View style={productStyles.productSelector}>
			<PagerView initialPage={0} style={productStyles.ProductPager}>
				{products.map((prod, index) => (
					<ProductView key={index} product={prod} />
				))}
			</PagerView>
			<View>
				<Text style={productStyles.productTitle}>
					{currentProduct["name"]
						? currentProduct["name"]
						: "Nome do produto"}
				</Text>
				<Text style={[productStyles.productCurrency]}>R$</Text>
				<Text style={productStyles.productPrice}>
					{currentProduct["preco"]
						? currentProduct["preco"]
						: "Preço do produto"}
				</Text>
			</View>
			<SizeSelector />
		</View>
	);
}
