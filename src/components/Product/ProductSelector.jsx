import { useState } from "react";
import { Text, View } from "react-native";
import PagerView from "react-native-pager-view";

import productStyles from "./productStyles";

import ProductView from "./ProductView";
import SizeSelector from "./SizeSelector";

export default function ProductSelector({ products = [] }) {
	const [currentProduct, setCurrentProduct] = useState(products[0] || {});
	const [selectedProduct, setSelectedProduct] = useState({});

	return (
		<View style={productStyles.productSelector}>
			<PagerView
				orientation={"horizontal"}
				onPageSelected={(prod) =>
					setCurrentProduct(products[prod.nativeEvent.position])
				}
				initialPage={0}
				style={productStyles.ProductPager}>
				{products.map((prod, index) => (
					<ProductView key={index} product={prod} />
				))}
			</PagerView>
			<View>
				<Text style={productStyles.productTitle}>
					{currentProduct["name"]
						? currentProduct["name"]
						: "Sem produto"}
				</Text>
				<Text style={[productStyles.productCurrency]}>R$</Text>
				<Text style={productStyles.productPrice}>
					{currentProduct["preço"]
						? parseFloat(currentProduct["preço"]).toFixed(2)
						: "Sem preço"}
				</Text>
			</View>
			<SizeSelector
				product={currentProduct}
				setSize={setSelectedProduct}
			/>
		</View>
	);
}
