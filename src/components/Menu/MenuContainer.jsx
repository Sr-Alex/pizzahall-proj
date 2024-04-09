import { Image, Text, View } from "react-native";

import globalStyles from "../../globalStyles";
import menuStyles from "./menuStyles";
import storeStyles from "../Stores/storeStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";
import ProductSelector from "./../Product/ProductSelector";

export default function MenuContainer({ store = {} }) {
	return (
		<View style={menuStyles.MenuContainer}>
			<View style={menuStyles.menuStoreShow}>
				<View style={globalStyles.components.roundedImgContainer}>
					<Image
						source={PizzaLogo}
						style={globalStyles.components.img}
					/>
				</View>
				<Text style={storeStyles.storeName}>Nome da loja</Text>
			</View>
			<ProductSelector products={Array.from({ length: 4 })} />
		</View>
	);
}
