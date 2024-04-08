import { Image, View } from "react-native";

import globalStyles from "../../globalStyles";
import PagerView from "react-native-pager-view";
import menuStyles from "./menuStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";

export default function ProductPager(products = []) {
	return (
		<PagerView initialPage={0} style={menuStyles.ProductPager}>
			<View key={0} style={menuStyles.productView}>
				<Image source={PizzaLogo} style={globalStyles.components.img} />
			</View>
			<View key={1} style={menuStyles.productView}>
				<Image source={PizzaLogo} style={globalStyles.components.img} />
			</View>
			<View key={2} style={menuStyles.productView}>
				<Image source={PizzaLogo} style={globalStyles.components.img} />
			</View>
		</PagerView>
	);
}
