import { useEffect, useState } from "react";
import { View } from "react-native";

import menuStyles from "./menuStyles";

import { ShoppingCartProvider } from "../../contexts/ShoppingCartContext";
import { getStoreProducts } from "./../../services/api/storeApi";

import ProductSelector from "./../Product/ProductSelector";
import StoreView from "../Stores/StoreView";

export default function MenuContainer({ store = {} }) {
	const [products, setProducts] = useState([]);

	const getProductsInfos = async () => {
		const response = await getStoreProducts(store["id"]);

		if (!response) return;

		console.log(products);
		setProducts(response);
	};

	useEffect(() => {
		console.log("carregou");
		getProductsInfos();
	}, [store]);

	return (
		<View style={menuStyles.MenuContainer}>
			<ShoppingCartProvider>
				<StoreView store={store} />
				<ProductSelector products={products} />
			</ShoppingCartProvider>
		</View>
	);
}
