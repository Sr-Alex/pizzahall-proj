import { Image, Text, View } from "react-native";

import menuStyles from "../Menu/menuStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";

export default function StoreView({ store = {} }) {
	return (
		<View style={menuStyles.menuStoreShow}>
			<View style={globalStyles.components.roundedImgContainer}>
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
