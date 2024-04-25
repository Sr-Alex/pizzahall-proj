import { useEffect, useState } from "react";
import { View } from "react-native";

import menuStyles from "./menuStyles";

import { ShoppingCartProvider } from "../../contexts/ShoppingCartContext";

import ProductSelector from "./../Product/ProductSelector";
import StoreView from "../Stores/StoreView";
import { getStoreProducts } from "./../../services/api/storeApi";

export default function MenuContainer({ store = {} }) {
	const [products, setProducts] = useState([]);

	const getProductsInfos = async () => {
		const response = await getStoreProducts();

		if (!response) return;

		setProducts(response);
	};

	useEffect(() => {
		getProductsInfos();
	}, []);

	return (
		<View style={menuStyles.MenuContainer}>
			<ShoppingCartProvider>
				<StoreView store={store} />
				<ProductSelector products={products} />
			</ShoppingCartProvider>
		</View>
	);
}
