import { useEffect, useState } from "react";
import { View } from "react-native";

import menuStyles from "./menuStyles";

import { ShoppingCartProvider } from "../../contexts/ShoppingCartContext";
import { getStoreProducts } from "./../../services/api/storeApi";

import ProductSelector from "./../Product/ProductSelector";
import StoreView from "../Stores/StoreView";
import BuySelectedMenu from "./BuySelectedMenu";

export default function MenuContainer({ store = {} }) {
	const [products, setProducts] = useState([]);

	const getProductsInfos = async () => {
		const response = await getStoreProducts(store["id"]);

		if (!response) return;

		setProducts(response);
	};

	useEffect(() => {
		getProductsInfos();
	}, [store]);

	return (
		<View style={menuStyles.MenuContainer}>
			<ShoppingCartProvider>
				<StoreView store={store} />
				<ProductSelector products={products} />
				<BuySelectedMenu />
			</ShoppingCartProvider>
		</View>
	);
}
