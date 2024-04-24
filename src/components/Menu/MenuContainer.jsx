import { View } from "react-native";

import menuStyles from "./menuStyles";

import { ShoppingCartProvider } from "../../contexts/ShoppingCartContext";

import ProductSelector from "./../Product/ProductSelector";
import StoreView from "../Stores/StoreView";

export default function MenuContainer({ store = {} }) {
	return (
		<View style={menuStyles.MenuContainer}>
			<ShoppingCartProvider>
				<StoreView store={store} />
				<ProductSelector products={store} />
			</ShoppingCartProvider>
		</View>
	);
}
