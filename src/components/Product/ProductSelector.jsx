import { useEffect, useState } from "react";
import { View } from "react-native";

import productStyles from "./productStyles";

import ProductSlider from "./ProductSlider";
import ProductDetails from "./ProductDetails";
import SizeSelector from "./SizeSelector";
import SelectProduct from "./SelectProduct";

export default function ProductSelector({ products = [] }) {
	const [currentProduct, setCurrentProduct] = useState(products[0] || {});
	const [selectedProduct, setSelectedProduct] = useState({});

	useEffect(() => {
		setSelectedProduct({});
	}, [currentProduct]);

	useEffect(() => {
		console.log(selectedProduct);
	}, [selectedProduct]);

	return (
		<View style={productStyles.productSelector}>
			<ProductSlider products={products} setProduct={setCurrentProduct} />
			<ProductDetails product={currentProduct} />
			<SizeSelector
				product={currentProduct}
				select={selectedProduct}
				setSelect={setSelectedProduct}
			/>
			<SelectProduct
				selected={selectedProduct}
			/>
		</View>
	);
}
