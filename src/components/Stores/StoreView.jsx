import { Image, Text, View } from "react-native";

import globalStyles from "../../globalStyles";
import menuStyles from "../Menu/menuStyles";
import storeStyles from "./storeStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";

export default function StoreView({ store = {} }) {
	return (
		<View style={menuStyles.MenuStoreShow}>
			<View style={menuStyles.MenuStoreShowLogo}>
				<Image
					source={
						store["imgUrl"] ? { uri: store["imgUrl"] } : PizzaLogo
					}
					style={globalStyles.components.img}
				/>
			</View>
			<Text style={storeStyles.storeName}>
				{store["name"] ? store["name"] : "Loja vazia"}
			</Text>
		</View>
	);
}
