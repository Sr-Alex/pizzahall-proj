import { Image, Text, View } from "react-native";

import globalStyles from "../../globalStyles";
import menuStyles from "./menuStyles";
import storeStyles from "../Stores/storeStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";
import ProductPager from "./ProductPager";

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
			<View style={menuStyles.productSelector}>
				<ProductPager />
			</View>
		</View>
	);
}
